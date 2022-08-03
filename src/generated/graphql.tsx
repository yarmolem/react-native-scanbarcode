import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Asiento = {
  __typename?: 'Asiento';
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada';
  apellidos?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Asistente = {
  __typename?: 'Asistente';
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type Butaca = {
  __typename?: 'Butaca';
  butacaId?: Maybe<Scalars['ID']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaInput = {
  butacaId?: InputMaybe<Scalars['ID']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Evento = {
  __typename?: 'Evento';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['ID']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  ubicacion?: Maybe<Scalars['String']>;
};

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  ubicacion?: InputMaybe<Scalars['String']>;
};

export type Feria = {
  __typename?: 'Feria';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  descuento?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['ID']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  descuento?: InputMaybe<Scalars['Int']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['ID']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos';
  data?: Maybe<Array<Maybe<Asiento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacas = {
  __typename?: 'GetAllButacas';
  data?: Maybe<Array<Maybe<Butaca>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEventos = {
  __typename?: 'GetAllEventos';
  data?: Maybe<Array<Evento>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Maybe<Suscriptor>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ConsultEmail?: Maybe<Scalars['String']>;
  CreateEvento?: Maybe<Evento>;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePedidoAbonado: Pedido;
  CreateSuscriptor?: Maybe<Suscriptor>;
  CreateUsuario: User;
  DeleteEvento?: Maybe<Scalars['String']>;
  DeleteImagen: Scalars['String'];
  Login?: Maybe<User>;
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>;
  UpdateAsistencia?: Maybe<Asistente>;
  UpdateEstadoEvento?: Maybe<Evento>;
  UpdateEvento?: Maybe<Evento>;
  UpdateFeria?: Maybe<Feria>;
  UpdateImagen: Imagen;
  UpdatePrecio: Butaca;
  UpdatePrecioReferencial?: Maybe<Referencial>;
  UpdateUsuario: User;
  ValidacionEntrada?: Maybe<Asistente>;
};


export type MutationConsultEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateEventoArgs = {
  input: EventoInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
};


export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput;
};


export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput;
};


export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput;
};


export type MutationUpdateEventoArgs = {
  input: EventoInput;
};


export type MutationUpdateFeriaArgs = {
  input: FeriaInput;
};


export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePrecioArgs = {
  input?: InputMaybe<ButacaInput>;
};


export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>;
  fecha?: InputMaybe<Scalars['Date']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Usuario?: Maybe<User>;
  fechaPedido?: Maybe<Scalars['Date']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioTotal?: Maybe<Scalars['Float']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  transaccionId?: Maybe<Scalars['Float']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>;
  GetAllButacas?: Maybe<GetAllButacas>;
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEventos?: Maybe<GetAllEventos>;
  GetAllEventosUsuario?: Maybe<GetAllEventos>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllPedidos?: Maybe<GetAllPedidos>;
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>;
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>;
  GetEventoSlug?: Maybe<Evento>;
  GetFeria?: Maybe<Feria>;
};


export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacasArgs = {
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};

export type Referencial = {
  __typename?: 'Referencial';
  precio?: Maybe<Scalars['Float']>;
  referenciaId?: Maybe<Scalars['ID']>;
  tendido?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>;
  referenciaId?: InputMaybe<Scalars['ID']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  constante?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login?: { __typename?: 'User', id?: string | null, email?: string | null, nombres?: string | null, celular?: string | null, apiToken?: string | null, apellidos?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null } | null };

export type UpdateAsistenciaMutationVariables = Exact<{
  input: UpdateAsistenciaInput;
}>;


export type UpdateAsistenciaMutation = { __typename?: 'Mutation', UpdateAsistencia?: { __typename?: 'Asistente', asientoId?: string | null, nombres?: string | null, apellidos?: string | null, tipoDocumento?: string | null, numDocumento?: string | null, codigo?: string | null, asiento?: string | null, estado?: string | null } | null };

export type ValidacionEntradaMutationVariables = Exact<{
  tipoDocumento?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  constante?: InputMaybe<Scalars['String']>;
  fecha?: InputMaybe<Scalars['Date']>;
}>;


export type ValidacionEntradaMutation = { __typename?: 'Mutation', ValidacionEntrada?: { __typename?: 'Asistente', asientoId?: string | null, nombres?: string | null, apellidos?: string | null, tipoDocumento?: string | null, numDocumento?: string | null, codigo?: string | null, asiento?: string | null, estado?: string | null } | null };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    email
    nombres
    celular
    apiToken
    apellidos
    tipoUsuario
    tipoDocumento
    numeroDocumento
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateAsistenciaDocument = gql`
    mutation UpdateAsistencia($input: UpdateAsistenciaInput!) {
  UpdateAsistencia(input: $input) {
    asientoId
    nombres
    apellidos
    tipoDocumento
    numDocumento
    codigo
    asiento
    estado
  }
}
    `;
export type UpdateAsistenciaMutationFn = Apollo.MutationFunction<UpdateAsistenciaMutation, UpdateAsistenciaMutationVariables>;

/**
 * __useUpdateAsistenciaMutation__
 *
 * To run a mutation, you first call `useUpdateAsistenciaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAsistenciaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAsistenciaMutation, { data, loading, error }] = useUpdateAsistenciaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAsistenciaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAsistenciaMutation, UpdateAsistenciaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAsistenciaMutation, UpdateAsistenciaMutationVariables>(UpdateAsistenciaDocument, options);
      }
export type UpdateAsistenciaMutationHookResult = ReturnType<typeof useUpdateAsistenciaMutation>;
export type UpdateAsistenciaMutationResult = Apollo.MutationResult<UpdateAsistenciaMutation>;
export type UpdateAsistenciaMutationOptions = Apollo.BaseMutationOptions<UpdateAsistenciaMutation, UpdateAsistenciaMutationVariables>;
export const ValidacionEntradaDocument = gql`
    mutation ValidacionEntrada($tipoDocumento: String, $numDocumento: String, $constante: String, $fecha: Date) {
  ValidacionEntrada(
    tipoDocumento: $tipoDocumento
    numDocumento: $numDocumento
    constante: $constante
    fecha: $fecha
  ) {
    asientoId
    nombres
    apellidos
    tipoDocumento
    numDocumento
    codigo
    asiento
    estado
  }
}
    `;
export type ValidacionEntradaMutationFn = Apollo.MutationFunction<ValidacionEntradaMutation, ValidacionEntradaMutationVariables>;

/**
 * __useValidacionEntradaMutation__
 *
 * To run a mutation, you first call `useValidacionEntradaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidacionEntradaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validacionEntradaMutation, { data, loading, error }] = useValidacionEntradaMutation({
 *   variables: {
 *      tipoDocumento: // value for 'tipoDocumento'
 *      numDocumento: // value for 'numDocumento'
 *      constante: // value for 'constante'
 *      fecha: // value for 'fecha'
 *   },
 * });
 */
export function useValidacionEntradaMutation(baseOptions?: Apollo.MutationHookOptions<ValidacionEntradaMutation, ValidacionEntradaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidacionEntradaMutation, ValidacionEntradaMutationVariables>(ValidacionEntradaDocument, options);
      }
export type ValidacionEntradaMutationHookResult = ReturnType<typeof useValidacionEntradaMutation>;
export type ValidacionEntradaMutationResult = Apollo.MutationResult<ValidacionEntradaMutation>;
export type ValidacionEntradaMutationOptions = Apollo.BaseMutationOptions<ValidacionEntradaMutation, ValidacionEntradaMutationVariables>;