import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

export type LeadInput = {
  nome: string;
  whatsapp: string;
  tipo_imovel: string;
  imoveis_por_mes: string;
};

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: LeadInput) => {
    const nome = String(data?.nome ?? "").trim().slice(0, 120);
    const whatsapp = String(data?.whatsapp ?? "").trim().slice(0, 40);
    const tipo_imovel = String(data?.tipo_imovel ?? "").trim().slice(0, 120);
    const imoveis_por_mes = String(data?.imoveis_por_mes ?? "").trim().slice(0, 40);
    if (!nome) throw new Error("Nome é obrigatório");
    if (!whatsapp) throw new Error("WhatsApp é obrigatório");
    return { nome, whatsapp, tipo_imovel, imoveis_por_mes };
  })
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await supabase.from("leads_venda").insert(data);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
