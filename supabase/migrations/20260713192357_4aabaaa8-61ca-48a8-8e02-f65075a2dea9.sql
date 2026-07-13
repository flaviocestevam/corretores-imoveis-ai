CREATE TABLE public.leads_venda (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  tipo_imovel TEXT,
  imoveis_por_mes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads_venda TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.leads_venda TO authenticated;
GRANT ALL ON public.leads_venda TO service_role;
ALTER TABLE public.leads_venda ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit leads" ON public.leads_venda FOR INSERT TO anon, authenticated WITH CHECK (true);