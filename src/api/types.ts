export interface Boleto {
  nossoNumero: string;
  seuNumero: string;
  codigoEspecie: string;
  codigoBarras: string;
  cnpjCpfBeneficiario: string;
  dataHoraSituacao: string;
  dataLimitePagamento: string;
  cnpjCpfPagador: string;
  nomeSacado: string;
  situacao: string;
  dataPagtoBaixa: string;
  dddPagador: string;
  dataVencimento: string;
  valorNominal: number;
  valorTotalRecebimento?: number;
  telefone: string;
  email: string;
  dataEmissao: string;
  dataLimite: string;
  linhaDigitavel: string;
  valorJuros: number;
  valorMulta: number;
  valorAbatimento: number;
  desconto1: Desconto;
  desconto2: Desconto;
  desconto3: Desconto;
  multa: MultaOrMora;
  mora: MultaOrMora;
  mensagem?: Mensagem;
  emailPagador: string;
  nomeBeneficiario: string;
  nomePagador: string;
  telefonePagador: string;
  tipoPessoaBeneficiario: string;
  tipoPessoaPagador: string;
}

export interface Mensagem {
  linha1: string;
  linha2: string;
  linha3: string;
  linha4: string;
  linha5: string;
}

export enum TipoDesconto {
  NAOTEMDESCONTO = "NAOTEMDESCONTO",
  VALORFIXODATAINFORMADA = "VALORFIXODATAINFORMADA",
  PERCENTUALDATAINFORMADA = "PERCENTUALDATAINFORMADA",
  VALORANTECIPACAODIACORRIDO = "VALORANTECIPACAODIACORRIDO",
  VALORANTECIPACAODIAUTIL = "VALORANTECIPACAODIAUTIL",
  PERCENTUALVALORNOMINALDIACORRIDO = "PERCENTUALVALORNOMINALDIACORRIDO",
  PERCENTUALVALORNOMINALDIAUTIL = "PERCENTUALVALORNOMINALDIAUTIL",
}

export interface MultaOrMora {
  codigo: keyof typeof TipoMulta | keyof typeof TipoMora;
  taxa?: number;
  valor?: number;
  data?: string;
}

export enum TipoMulta {
  NAOTEMMULTA = "NAOTEMMULTA",
  VALORFIXO = "VALORFIXO",
  PERCENTUAL = "PERCENTUAL",
}

export enum TipoMora {
  VALORDIA = "VALORDIA",
  TAXAMENSAL = "TAXAMENSAL",
  ISENTO = "ISENTO",
}

export interface Desconto {
  codigo: keyof typeof TipoDesconto;
  data?: string;
  taxa?: number;
  valor?: number;
}

export interface SummaryItem {
  quantidade: number;
  valor: number;
}

export interface Summary {
  recebidos: SummaryItem;
  previstos: SummaryItem;
  baixados: SummaryItem;
  expirados: SummaryItem;
}

export interface PaginatedBoleto {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  last: boolean;
  first: boolean;
  size: number;
  summary: Summary;
  content: Boleto[];
}

export interface LoginDTO {
  email: string;
  password: string;
}

export enum FiltrosBoletos {
  TODOS = "TODOS",
  VENCIDOSAVENCER = "VENCIDOSAVENCER",
  EXPIRADOS = "EXPIRADOS",
  PAGOS = "PAGOS",
  TODOSBAIXADOS = "TODOSBAIXADOS",
}

export enum FiltrosDatas {
  VENCIMENTO = "VENCIMENTO",
  EMISSAO = "EMISSAO",
  SITUACAO = "SITUACAO",
}

export enum Ordenacao {
  NOSSONUMERO = "NOSSONUMERO",
  SEUNUMERO = "SEUNUMERO",
  DATAVENCIMENTO_ASC = "DATAVENCIMENTO_ASC",
  DATAVENCIMENTO_DSC = "DATAVENCIMENTO_DSC",
  NOMESACADO = "NOMESACADO",
  VALOR_ASC = "VALOR_ASC",
  VALOR_DSC = "VALOR_DSC",
  STATUS_ASC = "STATUS_ASC",
  STATUS_DSC = "STATUS_DSC",
}

export interface ListarBoletosParams {
  filtrarPor?: keyof typeof FiltrosBoletos;
  filtrarDataPor?: keyof typeof FiltrosDatas;
  dataInicial: string;
  dataFinal: string;
  ordenarPor?: keyof typeof Ordenacao;
  page?: number;
  size?: number;
}
