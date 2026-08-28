
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WorkerProfile
 * 
 */
export type WorkerProfile = $Result.DefaultSelection<Prisma.$WorkerProfilePayload>
/**
 * Model CompanyProfile
 * 
 */
export type CompanyProfile = $Result.DefaultSelection<Prisma.$CompanyProfilePayload>
/**
 * Model JobProposal
 * 
 */
export type JobProposal = $Result.DefaultSelection<Prisma.$JobProposalPayload>
/**
 * Model ProposalResponse
 * 
 */
export type ProposalResponse = $Result.DefaultSelection<Prisma.$ProposalResponsePayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model InterviewRequest
 * 
 */
export type InterviewRequest = $Result.DefaultSelection<Prisma.$InterviewRequestPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.workerProfile`: Exposes CRUD operations for the **WorkerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkerProfiles
    * const workerProfiles = await prisma.workerProfile.findMany()
    * ```
    */
  get workerProfile(): Prisma.WorkerProfileDelegate<ExtArgs>;

  /**
   * `prisma.companyProfile`: Exposes CRUD operations for the **CompanyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyProfiles
    * const companyProfiles = await prisma.companyProfile.findMany()
    * ```
    */
  get companyProfile(): Prisma.CompanyProfileDelegate<ExtArgs>;

  /**
   * `prisma.jobProposal`: Exposes CRUD operations for the **JobProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobProposals
    * const jobProposals = await prisma.jobProposal.findMany()
    * ```
    */
  get jobProposal(): Prisma.JobProposalDelegate<ExtArgs>;

  /**
   * `prisma.proposalResponse`: Exposes CRUD operations for the **ProposalResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalResponses
    * const proposalResponses = await prisma.proposalResponse.findMany()
    * ```
    */
  get proposalResponse(): Prisma.ProposalResponseDelegate<ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs>;

  /**
   * `prisma.interviewRequest`: Exposes CRUD operations for the **InterviewRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewRequests
    * const interviewRequests = await prisma.interviewRequest.findMany()
    * ```
    */
  get interviewRequest(): Prisma.InterviewRequestDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    WorkerProfile: 'WorkerProfile',
    CompanyProfile: 'CompanyProfile',
    JobProposal: 'JobProposal',
    ProposalResponse: 'ProposalResponse',
    Favorite: 'Favorite',
    InterviewRequest: 'InterviewRequest',
    Notification: 'Notification',
    WorkExperience: 'WorkExperience'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "workerProfile" | "companyProfile" | "jobProposal" | "proposalResponse" | "favorite" | "interviewRequest" | "notification" | "workExperience"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WorkerProfile: {
        payload: Prisma.$WorkerProfilePayload<ExtArgs>
        fields: Prisma.WorkerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          findFirst: {
            args: Prisma.WorkerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          findMany: {
            args: Prisma.WorkerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>[]
          }
          create: {
            args: Prisma.WorkerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          createMany: {
            args: Prisma.WorkerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>[]
          }
          delete: {
            args: Prisma.WorkerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          update: {
            args: Prisma.WorkerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          deleteMany: {
            args: Prisma.WorkerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          aggregate: {
            args: Prisma.WorkerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkerProfile>
          }
          groupBy: {
            args: Prisma.WorkerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerProfileCountAggregateOutputType> | number
          }
        }
      }
      CompanyProfile: {
        payload: Prisma.$CompanyProfilePayload<ExtArgs>
        fields: Prisma.CompanyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findFirst: {
            args: Prisma.CompanyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findMany: {
            args: Prisma.CompanyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          create: {
            args: Prisma.CompanyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          createMany: {
            args: Prisma.CompanyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          delete: {
            args: Prisma.CompanyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          update: {
            args: Prisma.CompanyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          deleteMany: {
            args: Prisma.CompanyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          aggregate: {
            args: Prisma.CompanyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyProfile>
          }
          groupBy: {
            args: Prisma.CompanyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileCountAggregateOutputType> | number
          }
        }
      }
      JobProposal: {
        payload: Prisma.$JobProposalPayload<ExtArgs>
        fields: Prisma.JobProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          findFirst: {
            args: Prisma.JobProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          findMany: {
            args: Prisma.JobProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>[]
          }
          create: {
            args: Prisma.JobProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          createMany: {
            args: Prisma.JobProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>[]
          }
          delete: {
            args: Prisma.JobProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          update: {
            args: Prisma.JobProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          deleteMany: {
            args: Prisma.JobProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobProposalPayload>
          }
          aggregate: {
            args: Prisma.JobProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobProposal>
          }
          groupBy: {
            args: Prisma.JobProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobProposalCountArgs<ExtArgs>
            result: $Utils.Optional<JobProposalCountAggregateOutputType> | number
          }
        }
      }
      ProposalResponse: {
        payload: Prisma.$ProposalResponsePayload<ExtArgs>
        fields: Prisma.ProposalResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          findFirst: {
            args: Prisma.ProposalResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          findMany: {
            args: Prisma.ProposalResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>[]
          }
          create: {
            args: Prisma.ProposalResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          createMany: {
            args: Prisma.ProposalResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>[]
          }
          delete: {
            args: Prisma.ProposalResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          update: {
            args: Prisma.ProposalResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          deleteMany: {
            args: Prisma.ProposalResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalResponsePayload>
          }
          aggregate: {
            args: Prisma.ProposalResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalResponse>
          }
          groupBy: {
            args: Prisma.ProposalResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalResponseCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      InterviewRequest: {
        payload: Prisma.$InterviewRequestPayload<ExtArgs>
        fields: Prisma.InterviewRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          findFirst: {
            args: Prisma.InterviewRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          findMany: {
            args: Prisma.InterviewRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>[]
          }
          create: {
            args: Prisma.InterviewRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          createMany: {
            args: Prisma.InterviewRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>[]
          }
          delete: {
            args: Prisma.InterviewRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          update: {
            args: Prisma.InterviewRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          deleteMany: {
            args: Prisma.InterviewRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterviewRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewRequestPayload>
          }
          aggregate: {
            args: Prisma.InterviewRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewRequest>
          }
          groupBy: {
            args: Prisma.InterviewRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewRequestCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewRequestCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type WorkerProfileCountOutputType
   */

  export type WorkerProfileCountOutputType = {
    favoritedBy: number
    interviewRequests: number
    workExperiences: number
    proposalResponses: number
  }

  export type WorkerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritedBy?: boolean | WorkerProfileCountOutputTypeCountFavoritedByArgs
    interviewRequests?: boolean | WorkerProfileCountOutputTypeCountInterviewRequestsArgs
    workExperiences?: boolean | WorkerProfileCountOutputTypeCountWorkExperiencesArgs
    proposalResponses?: boolean | WorkerProfileCountOutputTypeCountProposalResponsesArgs
  }

  // Custom InputTypes
  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfileCountOutputType
     */
    select?: WorkerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountInterviewRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewRequestWhereInput
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountProposalResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalResponseWhereInput
  }


  /**
   * Count Type CompanyProfileCountOutputType
   */

  export type CompanyProfileCountOutputType = {
    favorites: number
    interviewRequests: number
    jobProposals: number
  }

  export type CompanyProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | CompanyProfileCountOutputTypeCountFavoritesArgs
    interviewRequests?: boolean | CompanyProfileCountOutputTypeCountInterviewRequestsArgs
    jobProposals?: boolean | CompanyProfileCountOutputTypeCountJobProposalsArgs
  }

  // Custom InputTypes
  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfileCountOutputType
     */
    select?: CompanyProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeCountInterviewRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewRequestWhereInput
  }

  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeCountJobProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobProposalWhereInput
  }


  /**
   * Count Type JobProposalCountOutputType
   */

  export type JobProposalCountOutputType = {
    responses: number
  }

  export type JobProposalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | JobProposalCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * JobProposalCountOutputType without action
   */
  export type JobProposalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposalCountOutputType
     */
    select?: JobProposalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobProposalCountOutputType without action
   */
  export type JobProposalCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    emailVerified: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    emailVerified: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    emailVerified: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    emailVerified?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: string
    emailVerified: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    workerProfile?: boolean | User$workerProfileArgs<ExtArgs>
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    emailVerified?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workerProfile?: boolean | User$workerProfileArgs<ExtArgs>
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workerProfile: Prisma.$WorkerProfilePayload<ExtArgs> | null
      companyProfile: Prisma.$CompanyProfilePayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: string
      emailVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workerProfile<T extends User$workerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$workerProfileArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    companyProfile<T extends User$companyProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$companyProfileArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.workerProfile
   */
  export type User$workerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    where?: WorkerProfileWhereInput
  }

  /**
   * User.companyProfile
   */
  export type User$companyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    where?: CompanyProfileWhereInput
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WorkerProfile
   */

  export type AggregateWorkerProfile = {
    _count: WorkerProfileCountAggregateOutputType | null
    _avg: WorkerProfileAvgAggregateOutputType | null
    _sum: WorkerProfileSumAggregateOutputType | null
    _min: WorkerProfileMinAggregateOutputType | null
    _max: WorkerProfileMaxAggregateOutputType | null
  }

  export type WorkerProfileAvgAggregateOutputType = {
    maxDistanceKm: number | null
  }

  export type WorkerProfileSumAggregateOutputType = {
    maxDistanceKm: number | null
  }

  export type WorkerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    photoUrl: string | null
    phone: string | null
    city: string | null
    province: string | null
    sigla: string | null
    region: string | null
    profession: string | null
    educationLevel: string | null
    educationField: string | null
    educationTitles: string | null
    skills: string | null
    certifications: string | null
    hasLicense: boolean | null
    hasCar: boolean | null
    availabilityStatus: string | null
    availabilityDetails: string | null
    maxDistanceKm: number | null
    desiredContract: string | null
    desiredSalary: string | null
    availabilityRegionsProvinces: string | null
    availabilityContracts: string | null
    availabilityRoles: string | null
    notes: string | null
    availabilityNotes: string | null
    availabilityUpdatedAt: Date | null
    cvPdfUrl: string | null
    videoPresentationUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    photoUrl: string | null
    phone: string | null
    city: string | null
    province: string | null
    sigla: string | null
    region: string | null
    profession: string | null
    educationLevel: string | null
    educationField: string | null
    educationTitles: string | null
    skills: string | null
    certifications: string | null
    hasLicense: boolean | null
    hasCar: boolean | null
    availabilityStatus: string | null
    availabilityDetails: string | null
    maxDistanceKm: number | null
    desiredContract: string | null
    desiredSalary: string | null
    availabilityRegionsProvinces: string | null
    availabilityContracts: string | null
    availabilityRoles: string | null
    notes: string | null
    availabilityNotes: string | null
    availabilityUpdatedAt: Date | null
    cvPdfUrl: string | null
    videoPresentationUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    photoUrl: number
    phone: number
    city: number
    province: number
    sigla: number
    region: number
    profession: number
    educationLevel: number
    educationField: number
    educationTitles: number
    skills: number
    certifications: number
    hasLicense: number
    hasCar: number
    availabilityStatus: number
    availabilityDetails: number
    maxDistanceKm: number
    desiredContract: number
    desiredSalary: number
    availabilityRegionsProvinces: number
    availabilityContracts: number
    availabilityRoles: number
    notes: number
    availabilityNotes: number
    availabilityUpdatedAt: number
    cvPdfUrl: number
    videoPresentationUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkerProfileAvgAggregateInputType = {
    maxDistanceKm?: true
  }

  export type WorkerProfileSumAggregateInputType = {
    maxDistanceKm?: true
  }

  export type WorkerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    photoUrl?: true
    phone?: true
    city?: true
    province?: true
    sigla?: true
    region?: true
    profession?: true
    educationLevel?: true
    educationField?: true
    educationTitles?: true
    skills?: true
    certifications?: true
    hasLicense?: true
    hasCar?: true
    availabilityStatus?: true
    availabilityDetails?: true
    maxDistanceKm?: true
    desiredContract?: true
    desiredSalary?: true
    availabilityRegionsProvinces?: true
    availabilityContracts?: true
    availabilityRoles?: true
    notes?: true
    availabilityNotes?: true
    availabilityUpdatedAt?: true
    cvPdfUrl?: true
    videoPresentationUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    photoUrl?: true
    phone?: true
    city?: true
    province?: true
    sigla?: true
    region?: true
    profession?: true
    educationLevel?: true
    educationField?: true
    educationTitles?: true
    skills?: true
    certifications?: true
    hasLicense?: true
    hasCar?: true
    availabilityStatus?: true
    availabilityDetails?: true
    maxDistanceKm?: true
    desiredContract?: true
    desiredSalary?: true
    availabilityRegionsProvinces?: true
    availabilityContracts?: true
    availabilityRoles?: true
    notes?: true
    availabilityNotes?: true
    availabilityUpdatedAt?: true
    cvPdfUrl?: true
    videoPresentationUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    photoUrl?: true
    phone?: true
    city?: true
    province?: true
    sigla?: true
    region?: true
    profession?: true
    educationLevel?: true
    educationField?: true
    educationTitles?: true
    skills?: true
    certifications?: true
    hasLicense?: true
    hasCar?: true
    availabilityStatus?: true
    availabilityDetails?: true
    maxDistanceKm?: true
    desiredContract?: true
    desiredSalary?: true
    availabilityRegionsProvinces?: true
    availabilityContracts?: true
    availabilityRoles?: true
    notes?: true
    availabilityNotes?: true
    availabilityUpdatedAt?: true
    cvPdfUrl?: true
    videoPresentationUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerProfile to aggregate.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkerProfiles
    **/
    _count?: true | WorkerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerProfileMaxAggregateInputType
  }

  export type GetWorkerProfileAggregateType<T extends WorkerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkerProfile[P]>
      : GetScalarType<T[P], AggregateWorkerProfile[P]>
  }




  export type WorkerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerProfileWhereInput
    orderBy?: WorkerProfileOrderByWithAggregationInput | WorkerProfileOrderByWithAggregationInput[]
    by: WorkerProfileScalarFieldEnum[] | WorkerProfileScalarFieldEnum
    having?: WorkerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerProfileCountAggregateInputType | true
    _avg?: WorkerProfileAvgAggregateInputType
    _sum?: WorkerProfileSumAggregateInputType
    _min?: WorkerProfileMinAggregateInputType
    _max?: WorkerProfileMaxAggregateInputType
  }

  export type WorkerProfileGroupByOutputType = {
    id: string
    userId: string
    firstName: string
    lastName: string
    photoUrl: string | null
    phone: string | null
    city: string
    province: string
    sigla: string | null
    region: string
    profession: string
    educationLevel: string
    educationField: string | null
    educationTitles: string
    skills: string
    certifications: string | null
    hasLicense: boolean
    hasCar: boolean
    availabilityStatus: string
    availabilityDetails: string | null
    maxDistanceKm: number
    desiredContract: string | null
    desiredSalary: string | null
    availabilityRegionsProvinces: string
    availabilityContracts: string
    availabilityRoles: string
    notes: string | null
    availabilityNotes: string | null
    availabilityUpdatedAt: Date | null
    cvPdfUrl: string | null
    videoPresentationUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkerProfileCountAggregateOutputType | null
    _avg: WorkerProfileAvgAggregateOutputType | null
    _sum: WorkerProfileSumAggregateOutputType | null
    _min: WorkerProfileMinAggregateOutputType | null
    _max: WorkerProfileMaxAggregateOutputType | null
  }

  type GetWorkerProfileGroupByPayload<T extends WorkerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerProfileGroupByOutputType[P]>
        }
      >
    >


  export type WorkerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    photoUrl?: boolean
    phone?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    region?: boolean
    profession?: boolean
    educationLevel?: boolean
    educationField?: boolean
    educationTitles?: boolean
    skills?: boolean
    certifications?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus?: boolean
    availabilityDetails?: boolean
    maxDistanceKm?: boolean
    desiredContract?: boolean
    desiredSalary?: boolean
    availabilityRegionsProvinces?: boolean
    availabilityContracts?: boolean
    availabilityRoles?: boolean
    notes?: boolean
    availabilityNotes?: boolean
    availabilityUpdatedAt?: boolean
    cvPdfUrl?: boolean
    videoPresentationUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    favoritedBy?: boolean | WorkerProfile$favoritedByArgs<ExtArgs>
    interviewRequests?: boolean | WorkerProfile$interviewRequestsArgs<ExtArgs>
    workExperiences?: boolean | WorkerProfile$workExperiencesArgs<ExtArgs>
    proposalResponses?: boolean | WorkerProfile$proposalResponsesArgs<ExtArgs>
    _count?: boolean | WorkerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerProfile"]>

  export type WorkerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    photoUrl?: boolean
    phone?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    region?: boolean
    profession?: boolean
    educationLevel?: boolean
    educationField?: boolean
    educationTitles?: boolean
    skills?: boolean
    certifications?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus?: boolean
    availabilityDetails?: boolean
    maxDistanceKm?: boolean
    desiredContract?: boolean
    desiredSalary?: boolean
    availabilityRegionsProvinces?: boolean
    availabilityContracts?: boolean
    availabilityRoles?: boolean
    notes?: boolean
    availabilityNotes?: boolean
    availabilityUpdatedAt?: boolean
    cvPdfUrl?: boolean
    videoPresentationUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerProfile"]>

  export type WorkerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    photoUrl?: boolean
    phone?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    region?: boolean
    profession?: boolean
    educationLevel?: boolean
    educationField?: boolean
    educationTitles?: boolean
    skills?: boolean
    certifications?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus?: boolean
    availabilityDetails?: boolean
    maxDistanceKm?: boolean
    desiredContract?: boolean
    desiredSalary?: boolean
    availabilityRegionsProvinces?: boolean
    availabilityContracts?: boolean
    availabilityRoles?: boolean
    notes?: boolean
    availabilityNotes?: boolean
    availabilityUpdatedAt?: boolean
    cvPdfUrl?: boolean
    videoPresentationUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    favoritedBy?: boolean | WorkerProfile$favoritedByArgs<ExtArgs>
    interviewRequests?: boolean | WorkerProfile$interviewRequestsArgs<ExtArgs>
    workExperiences?: boolean | WorkerProfile$workExperiencesArgs<ExtArgs>
    proposalResponses?: boolean | WorkerProfile$proposalResponsesArgs<ExtArgs>
    _count?: boolean | WorkerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      favoritedBy: Prisma.$FavoritePayload<ExtArgs>[]
      interviewRequests: Prisma.$InterviewRequestPayload<ExtArgs>[]
      workExperiences: Prisma.$WorkExperiencePayload<ExtArgs>[]
      proposalResponses: Prisma.$ProposalResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string
      lastName: string
      photoUrl: string | null
      phone: string | null
      city: string
      province: string
      sigla: string | null
      region: string
      profession: string
      educationLevel: string
      educationField: string | null
      educationTitles: string
      skills: string
      certifications: string | null
      hasLicense: boolean
      hasCar: boolean
      availabilityStatus: string
      availabilityDetails: string | null
      maxDistanceKm: number
      desiredContract: string | null
      desiredSalary: string | null
      availabilityRegionsProvinces: string
      availabilityContracts: string
      availabilityRoles: string
      notes: string | null
      availabilityNotes: string | null
      availabilityUpdatedAt: Date | null
      cvPdfUrl: string | null
      videoPresentationUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workerProfile"]>
    composites: {}
  }

  type WorkerProfileGetPayload<S extends boolean | null | undefined | WorkerProfileDefaultArgs> = $Result.GetResult<Prisma.$WorkerProfilePayload, S>

  type WorkerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkerProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkerProfileCountAggregateInputType | true
    }

  export interface WorkerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkerProfile'], meta: { name: 'WorkerProfile' } }
    /**
     * Find zero or one WorkerProfile that matches the filter.
     * @param {WorkerProfileFindUniqueArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerProfileFindUniqueArgs>(args: SelectSubset<T, WorkerProfileFindUniqueArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkerProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkerProfileFindUniqueOrThrowArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindFirstArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerProfileFindFirstArgs>(args?: SelectSubset<T, WorkerProfileFindFirstArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindFirstOrThrowArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkerProfiles
     * const workerProfiles = await prisma.workerProfile.findMany()
     * 
     * // Get first 10 WorkerProfiles
     * const workerProfiles = await prisma.workerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerProfileWithIdOnly = await prisma.workerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerProfileFindManyArgs>(args?: SelectSubset<T, WorkerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkerProfile.
     * @param {WorkerProfileCreateArgs} args - Arguments to create a WorkerProfile.
     * @example
     * // Create one WorkerProfile
     * const WorkerProfile = await prisma.workerProfile.create({
     *   data: {
     *     // ... data to create a WorkerProfile
     *   }
     * })
     * 
     */
    create<T extends WorkerProfileCreateArgs>(args: SelectSubset<T, WorkerProfileCreateArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkerProfiles.
     * @param {WorkerProfileCreateManyArgs} args - Arguments to create many WorkerProfiles.
     * @example
     * // Create many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerProfileCreateManyArgs>(args?: SelectSubset<T, WorkerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkerProfiles and returns the data saved in the database.
     * @param {WorkerProfileCreateManyAndReturnArgs} args - Arguments to create many WorkerProfiles.
     * @example
     * // Create many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkerProfiles and only return the `id`
     * const workerProfileWithIdOnly = await prisma.workerProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkerProfile.
     * @param {WorkerProfileDeleteArgs} args - Arguments to delete one WorkerProfile.
     * @example
     * // Delete one WorkerProfile
     * const WorkerProfile = await prisma.workerProfile.delete({
     *   where: {
     *     // ... filter to delete one WorkerProfile
     *   }
     * })
     * 
     */
    delete<T extends WorkerProfileDeleteArgs>(args: SelectSubset<T, WorkerProfileDeleteArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkerProfile.
     * @param {WorkerProfileUpdateArgs} args - Arguments to update one WorkerProfile.
     * @example
     * // Update one WorkerProfile
     * const workerProfile = await prisma.workerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerProfileUpdateArgs>(args: SelectSubset<T, WorkerProfileUpdateArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkerProfiles.
     * @param {WorkerProfileDeleteManyArgs} args - Arguments to filter WorkerProfiles to delete.
     * @example
     * // Delete a few WorkerProfiles
     * const { count } = await prisma.workerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerProfileDeleteManyArgs>(args?: SelectSubset<T, WorkerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerProfileUpdateManyArgs>(args: SelectSubset<T, WorkerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkerProfile.
     * @param {WorkerProfileUpsertArgs} args - Arguments to update or create a WorkerProfile.
     * @example
     * // Update or create a WorkerProfile
     * const workerProfile = await prisma.workerProfile.upsert({
     *   create: {
     *     // ... data to create a WorkerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkerProfile we want to update
     *   }
     * })
     */
    upsert<T extends WorkerProfileUpsertArgs>(args: SelectSubset<T, WorkerProfileUpsertArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileCountArgs} args - Arguments to filter WorkerProfiles to count.
     * @example
     * // Count the number of WorkerProfiles
     * const count = await prisma.workerProfile.count({
     *   where: {
     *     // ... the filter for the WorkerProfiles we want to count
     *   }
     * })
    **/
    count<T extends WorkerProfileCountArgs>(
      args?: Subset<T, WorkerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerProfileAggregateArgs>(args: Subset<T, WorkerProfileAggregateArgs>): Prisma.PrismaPromise<GetWorkerProfileAggregateType<T>>

    /**
     * Group by WorkerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerProfileGroupByArgs['orderBy'] }
        : { orderBy?: WorkerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkerProfile model
   */
  readonly fields: WorkerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    favoritedBy<T extends WorkerProfile$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany"> | Null>
    interviewRequests<T extends WorkerProfile$interviewRequestsArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$interviewRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findMany"> | Null>
    workExperiences<T extends WorkerProfile$workExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$workExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany"> | Null>
    proposalResponses<T extends WorkerProfile$proposalResponsesArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$proposalResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkerProfile model
   */ 
  interface WorkerProfileFieldRefs {
    readonly id: FieldRef<"WorkerProfile", 'String'>
    readonly userId: FieldRef<"WorkerProfile", 'String'>
    readonly firstName: FieldRef<"WorkerProfile", 'String'>
    readonly lastName: FieldRef<"WorkerProfile", 'String'>
    readonly photoUrl: FieldRef<"WorkerProfile", 'String'>
    readonly phone: FieldRef<"WorkerProfile", 'String'>
    readonly city: FieldRef<"WorkerProfile", 'String'>
    readonly province: FieldRef<"WorkerProfile", 'String'>
    readonly sigla: FieldRef<"WorkerProfile", 'String'>
    readonly region: FieldRef<"WorkerProfile", 'String'>
    readonly profession: FieldRef<"WorkerProfile", 'String'>
    readonly educationLevel: FieldRef<"WorkerProfile", 'String'>
    readonly educationField: FieldRef<"WorkerProfile", 'String'>
    readonly educationTitles: FieldRef<"WorkerProfile", 'String'>
    readonly skills: FieldRef<"WorkerProfile", 'String'>
    readonly certifications: FieldRef<"WorkerProfile", 'String'>
    readonly hasLicense: FieldRef<"WorkerProfile", 'Boolean'>
    readonly hasCar: FieldRef<"WorkerProfile", 'Boolean'>
    readonly availabilityStatus: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityDetails: FieldRef<"WorkerProfile", 'String'>
    readonly maxDistanceKm: FieldRef<"WorkerProfile", 'Int'>
    readonly desiredContract: FieldRef<"WorkerProfile", 'String'>
    readonly desiredSalary: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityRegionsProvinces: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityContracts: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityRoles: FieldRef<"WorkerProfile", 'String'>
    readonly notes: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityNotes: FieldRef<"WorkerProfile", 'String'>
    readonly availabilityUpdatedAt: FieldRef<"WorkerProfile", 'DateTime'>
    readonly cvPdfUrl: FieldRef<"WorkerProfile", 'String'>
    readonly videoPresentationUrl: FieldRef<"WorkerProfile", 'String'>
    readonly createdAt: FieldRef<"WorkerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkerProfile findUnique
   */
  export type WorkerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile findUniqueOrThrow
   */
  export type WorkerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile findFirst
   */
  export type WorkerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerProfiles.
     */
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile findFirstOrThrow
   */
  export type WorkerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerProfiles.
     */
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile findMany
   */
  export type WorkerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfiles to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile create
   */
  export type WorkerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkerProfile.
     */
    data: XOR<WorkerProfileCreateInput, WorkerProfileUncheckedCreateInput>
  }

  /**
   * WorkerProfile createMany
   */
  export type WorkerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkerProfiles.
     */
    data: WorkerProfileCreateManyInput | WorkerProfileCreateManyInput[]
  }

  /**
   * WorkerProfile createManyAndReturn
   */
  export type WorkerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkerProfiles.
     */
    data: WorkerProfileCreateManyInput | WorkerProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkerProfile update
   */
  export type WorkerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkerProfile.
     */
    data: XOR<WorkerProfileUpdateInput, WorkerProfileUncheckedUpdateInput>
    /**
     * Choose, which WorkerProfile to update.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile updateMany
   */
  export type WorkerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkerProfiles.
     */
    data: XOR<WorkerProfileUpdateManyMutationInput, WorkerProfileUncheckedUpdateManyInput>
    /**
     * Filter which WorkerProfiles to update
     */
    where?: WorkerProfileWhereInput
  }

  /**
   * WorkerProfile upsert
   */
  export type WorkerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkerProfile to update in case it exists.
     */
    where: WorkerProfileWhereUniqueInput
    /**
     * In case the WorkerProfile found by the `where` argument doesn't exist, create a new WorkerProfile with this data.
     */
    create: XOR<WorkerProfileCreateInput, WorkerProfileUncheckedCreateInput>
    /**
     * In case the WorkerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerProfileUpdateInput, WorkerProfileUncheckedUpdateInput>
  }

  /**
   * WorkerProfile delete
   */
  export type WorkerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter which WorkerProfile to delete.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile deleteMany
   */
  export type WorkerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerProfiles to delete
     */
    where?: WorkerProfileWhereInput
  }

  /**
   * WorkerProfile.favoritedBy
   */
  export type WorkerProfile$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * WorkerProfile.interviewRequests
   */
  export type WorkerProfile$interviewRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    where?: InterviewRequestWhereInput
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    cursor?: InterviewRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewRequestScalarFieldEnum | InterviewRequestScalarFieldEnum[]
  }

  /**
   * WorkerProfile.workExperiences
   */
  export type WorkerProfile$workExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkerProfile.proposalResponses
   */
  export type WorkerProfile$proposalResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    where?: ProposalResponseWhereInput
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    cursor?: ProposalResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalResponseScalarFieldEnum | ProposalResponseScalarFieldEnum[]
  }

  /**
   * WorkerProfile without action
   */
  export type WorkerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
  }


  /**
   * Model CompanyProfile
   */

  export type AggregateCompanyProfile = {
    _count: CompanyProfileCountAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  export type CompanyProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyType: string | null
    companyName: string | null
    address: string | null
    vatNumber: string | null
    firstName: string | null
    lastName: string | null
    residenzaCapCitta: string | null
    fiscalCode: string | null
    industry: string | null
    city: string | null
    province: string | null
    sigla: string | null
    contactPerson: string | null
    contactPhone: string | null
    logoUrl: string | null
    idDocumentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyType: string | null
    companyName: string | null
    address: string | null
    vatNumber: string | null
    firstName: string | null
    lastName: string | null
    residenzaCapCitta: string | null
    fiscalCode: string | null
    industry: string | null
    city: string | null
    province: string | null
    sigla: string | null
    contactPerson: string | null
    contactPhone: string | null
    logoUrl: string | null
    idDocumentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyType: number
    companyName: number
    address: number
    vatNumber: number
    firstName: number
    lastName: number
    residenzaCapCitta: number
    fiscalCode: number
    industry: number
    city: number
    province: number
    sigla: number
    contactPerson: number
    contactPhone: number
    logoUrl: number
    idDocumentUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyType?: true
    companyName?: true
    address?: true
    vatNumber?: true
    firstName?: true
    lastName?: true
    residenzaCapCitta?: true
    fiscalCode?: true
    industry?: true
    city?: true
    province?: true
    sigla?: true
    contactPerson?: true
    contactPhone?: true
    logoUrl?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyType?: true
    companyName?: true
    address?: true
    vatNumber?: true
    firstName?: true
    lastName?: true
    residenzaCapCitta?: true
    fiscalCode?: true
    industry?: true
    city?: true
    province?: true
    sigla?: true
    contactPerson?: true
    contactPhone?: true
    logoUrl?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyType?: true
    companyName?: true
    address?: true
    vatNumber?: true
    firstName?: true
    lastName?: true
    residenzaCapCitta?: true
    fiscalCode?: true
    industry?: true
    city?: true
    province?: true
    sigla?: true
    contactPerson?: true
    contactPhone?: true
    logoUrl?: true
    idDocumentUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfile to aggregate.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyProfiles
    **/
    _count?: true | CompanyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type GetCompanyProfileAggregateType<T extends CompanyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyProfile[P]>
      : GetScalarType<T[P], AggregateCompanyProfile[P]>
  }




  export type CompanyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyProfileWhereInput
    orderBy?: CompanyProfileOrderByWithAggregationInput | CompanyProfileOrderByWithAggregationInput[]
    by: CompanyProfileScalarFieldEnum[] | CompanyProfileScalarFieldEnum
    having?: CompanyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyProfileCountAggregateInputType | true
    _min?: CompanyProfileMinAggregateInputType
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type CompanyProfileGroupByOutputType = {
    id: string
    userId: string
    companyType: string
    companyName: string | null
    address: string | null
    vatNumber: string | null
    firstName: string | null
    lastName: string | null
    residenzaCapCitta: string | null
    fiscalCode: string | null
    industry: string | null
    city: string | null
    province: string | null
    sigla: string | null
    contactPerson: string | null
    contactPhone: string | null
    logoUrl: string | null
    idDocumentUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyProfileCountAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  type GetCompanyProfileGroupByPayload<T extends CompanyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
        }
      >
    >


  export type CompanyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyType?: boolean
    companyName?: boolean
    address?: boolean
    vatNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    residenzaCapCitta?: boolean
    fiscalCode?: boolean
    industry?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    logoUrl?: boolean
    idDocumentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | CompanyProfile$favoritesArgs<ExtArgs>
    interviewRequests?: boolean | CompanyProfile$interviewRequestsArgs<ExtArgs>
    jobProposals?: boolean | CompanyProfile$jobProposalsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyType?: boolean
    companyName?: boolean
    address?: boolean
    vatNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    residenzaCapCitta?: boolean
    fiscalCode?: boolean
    industry?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    logoUrl?: boolean
    idDocumentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyType?: boolean
    companyName?: boolean
    address?: boolean
    vatNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    residenzaCapCitta?: boolean
    fiscalCode?: boolean
    industry?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    contactPerson?: boolean
    contactPhone?: boolean
    logoUrl?: boolean
    idDocumentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | CompanyProfile$favoritesArgs<ExtArgs>
    interviewRequests?: boolean | CompanyProfile$interviewRequestsArgs<ExtArgs>
    jobProposals?: boolean | CompanyProfile$jobProposalsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      interviewRequests: Prisma.$InterviewRequestPayload<ExtArgs>[]
      jobProposals: Prisma.$JobProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyType: string
      companyName: string | null
      address: string | null
      vatNumber: string | null
      firstName: string | null
      lastName: string | null
      residenzaCapCitta: string | null
      fiscalCode: string | null
      industry: string | null
      city: string | null
      province: string | null
      sigla: string | null
      contactPerson: string | null
      contactPhone: string | null
      logoUrl: string | null
      idDocumentUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyProfile"]>
    composites: {}
  }

  type CompanyProfileGetPayload<S extends boolean | null | undefined | CompanyProfileDefaultArgs> = $Result.GetResult<Prisma.$CompanyProfilePayload, S>

  type CompanyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyProfileCountAggregateInputType | true
    }

  export interface CompanyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyProfile'], meta: { name: 'CompanyProfile' } }
    /**
     * Find zero or one CompanyProfile that matches the filter.
     * @param {CompanyProfileFindUniqueArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyProfileFindUniqueArgs>(args: SelectSubset<T, CompanyProfileFindUniqueArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompanyProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyProfileFindUniqueOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompanyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyProfileFindFirstArgs>(args?: SelectSubset<T, CompanyProfileFindFirstArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompanyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompanyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany()
     * 
     * // Get first 10 CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyProfileFindManyArgs>(args?: SelectSubset<T, CompanyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompanyProfile.
     * @param {CompanyProfileCreateArgs} args - Arguments to create a CompanyProfile.
     * @example
     * // Create one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.create({
     *   data: {
     *     // ... data to create a CompanyProfile
     *   }
     * })
     * 
     */
    create<T extends CompanyProfileCreateArgs>(args: SelectSubset<T, CompanyProfileCreateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompanyProfiles.
     * @param {CompanyProfileCreateManyArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyProfileCreateManyArgs>(args?: SelectSubset<T, CompanyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyProfiles and returns the data saved in the database.
     * @param {CompanyProfileCreateManyAndReturnArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompanyProfile.
     * @param {CompanyProfileDeleteArgs} args - Arguments to delete one CompanyProfile.
     * @example
     * // Delete one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.delete({
     *   where: {
     *     // ... filter to delete one CompanyProfile
     *   }
     * })
     * 
     */
    delete<T extends CompanyProfileDeleteArgs>(args: SelectSubset<T, CompanyProfileDeleteArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompanyProfile.
     * @param {CompanyProfileUpdateArgs} args - Arguments to update one CompanyProfile.
     * @example
     * // Update one CompanyProfile
     * const companyProfile = await prisma.companyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyProfileUpdateArgs>(args: SelectSubset<T, CompanyProfileUpdateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompanyProfiles.
     * @param {CompanyProfileDeleteManyArgs} args - Arguments to filter CompanyProfiles to delete.
     * @example
     * // Delete a few CompanyProfiles
     * const { count } = await prisma.companyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyProfileDeleteManyArgs>(args?: SelectSubset<T, CompanyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyProfileUpdateManyArgs>(args: SelectSubset<T, CompanyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyProfile.
     * @param {CompanyProfileUpsertArgs} args - Arguments to update or create a CompanyProfile.
     * @example
     * // Update or create a CompanyProfile
     * const companyProfile = await prisma.companyProfile.upsert({
     *   create: {
     *     // ... data to create a CompanyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyProfile we want to update
     *   }
     * })
     */
    upsert<T extends CompanyProfileUpsertArgs>(args: SelectSubset<T, CompanyProfileUpsertArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileCountArgs} args - Arguments to filter CompanyProfiles to count.
     * @example
     * // Count the number of CompanyProfiles
     * const count = await prisma.companyProfile.count({
     *   where: {
     *     // ... the filter for the CompanyProfiles we want to count
     *   }
     * })
    **/
    count<T extends CompanyProfileCountArgs>(
      args?: Subset<T, CompanyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyProfileAggregateArgs>(args: Subset<T, CompanyProfileAggregateArgs>): Prisma.PrismaPromise<GetCompanyProfileAggregateType<T>>

    /**
     * Group by CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyProfileGroupByArgs['orderBy'] }
        : { orderBy?: CompanyProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyProfile model
   */
  readonly fields: CompanyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    favorites<T extends CompanyProfile$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfile$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany"> | Null>
    interviewRequests<T extends CompanyProfile$interviewRequestsArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfile$interviewRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findMany"> | Null>
    jobProposals<T extends CompanyProfile$jobProposalsArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfile$jobProposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyProfile model
   */ 
  interface CompanyProfileFieldRefs {
    readonly id: FieldRef<"CompanyProfile", 'String'>
    readonly userId: FieldRef<"CompanyProfile", 'String'>
    readonly companyType: FieldRef<"CompanyProfile", 'String'>
    readonly companyName: FieldRef<"CompanyProfile", 'String'>
    readonly address: FieldRef<"CompanyProfile", 'String'>
    readonly vatNumber: FieldRef<"CompanyProfile", 'String'>
    readonly firstName: FieldRef<"CompanyProfile", 'String'>
    readonly lastName: FieldRef<"CompanyProfile", 'String'>
    readonly residenzaCapCitta: FieldRef<"CompanyProfile", 'String'>
    readonly fiscalCode: FieldRef<"CompanyProfile", 'String'>
    readonly industry: FieldRef<"CompanyProfile", 'String'>
    readonly city: FieldRef<"CompanyProfile", 'String'>
    readonly province: FieldRef<"CompanyProfile", 'String'>
    readonly sigla: FieldRef<"CompanyProfile", 'String'>
    readonly contactPerson: FieldRef<"CompanyProfile", 'String'>
    readonly contactPhone: FieldRef<"CompanyProfile", 'String'>
    readonly logoUrl: FieldRef<"CompanyProfile", 'String'>
    readonly idDocumentUrl: FieldRef<"CompanyProfile", 'String'>
    readonly createdAt: FieldRef<"CompanyProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyProfile findUnique
   */
  export type CompanyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findUniqueOrThrow
   */
  export type CompanyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findFirst
   */
  export type CompanyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findFirstOrThrow
   */
  export type CompanyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findMany
   */
  export type CompanyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfiles to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile create
   */
  export type CompanyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyProfile.
     */
    data: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
  }

  /**
   * CompanyProfile createMany
   */
  export type CompanyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
  }

  /**
   * CompanyProfile createManyAndReturn
   */
  export type CompanyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyProfile update
   */
  export type CompanyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyProfile.
     */
    data: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
    /**
     * Choose, which CompanyProfile to update.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile updateMany
   */
  export type CompanyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
  }

  /**
   * CompanyProfile upsert
   */
  export type CompanyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyProfile to update in case it exists.
     */
    where: CompanyProfileWhereUniqueInput
    /**
     * In case the CompanyProfile found by the `where` argument doesn't exist, create a new CompanyProfile with this data.
     */
    create: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
    /**
     * In case the CompanyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
  }

  /**
   * CompanyProfile delete
   */
  export type CompanyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter which CompanyProfile to delete.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile deleteMany
   */
  export type CompanyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfiles to delete
     */
    where?: CompanyProfileWhereInput
  }

  /**
   * CompanyProfile.favorites
   */
  export type CompanyProfile$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * CompanyProfile.interviewRequests
   */
  export type CompanyProfile$interviewRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    where?: InterviewRequestWhereInput
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    cursor?: InterviewRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewRequestScalarFieldEnum | InterviewRequestScalarFieldEnum[]
  }

  /**
   * CompanyProfile.jobProposals
   */
  export type CompanyProfile$jobProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    where?: JobProposalWhereInput
    orderBy?: JobProposalOrderByWithRelationInput | JobProposalOrderByWithRelationInput[]
    cursor?: JobProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobProposalScalarFieldEnum | JobProposalScalarFieldEnum[]
  }

  /**
   * CompanyProfile without action
   */
  export type CompanyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
  }


  /**
   * Model JobProposal
   */

  export type AggregateJobProposal = {
    _count: JobProposalCountAggregateOutputType | null
    _min: JobProposalMinAggregateOutputType | null
    _max: JobProposalMaxAggregateOutputType | null
  }

  export type JobProposalMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    professions: string | null
    locations: string | null
    educationTitle: string | null
    hasLicense: boolean | null
    hasCar: boolean | null
    minSalary: string | null
    maxSalary: string | null
    notes: string | null
    status: string | null
    contractType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobProposalMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    professions: string | null
    locations: string | null
    educationTitle: string | null
    hasLicense: boolean | null
    hasCar: boolean | null
    minSalary: string | null
    maxSalary: string | null
    notes: string | null
    status: string | null
    contractType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobProposalCountAggregateOutputType = {
    id: number
    companyId: number
    professions: number
    locations: number
    educationTitle: number
    hasLicense: number
    hasCar: number
    minSalary: number
    maxSalary: number
    notes: number
    status: number
    contractType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobProposalMinAggregateInputType = {
    id?: true
    companyId?: true
    professions?: true
    locations?: true
    educationTitle?: true
    hasLicense?: true
    hasCar?: true
    minSalary?: true
    maxSalary?: true
    notes?: true
    status?: true
    contractType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobProposalMaxAggregateInputType = {
    id?: true
    companyId?: true
    professions?: true
    locations?: true
    educationTitle?: true
    hasLicense?: true
    hasCar?: true
    minSalary?: true
    maxSalary?: true
    notes?: true
    status?: true
    contractType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobProposalCountAggregateInputType = {
    id?: true
    companyId?: true
    professions?: true
    locations?: true
    educationTitle?: true
    hasLicense?: true
    hasCar?: true
    minSalary?: true
    maxSalary?: true
    notes?: true
    status?: true
    contractType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobProposal to aggregate.
     */
    where?: JobProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobProposals to fetch.
     */
    orderBy?: JobProposalOrderByWithRelationInput | JobProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobProposals
    **/
    _count?: true | JobProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobProposalMaxAggregateInputType
  }

  export type GetJobProposalAggregateType<T extends JobProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateJobProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobProposal[P]>
      : GetScalarType<T[P], AggregateJobProposal[P]>
  }




  export type JobProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobProposalWhereInput
    orderBy?: JobProposalOrderByWithAggregationInput | JobProposalOrderByWithAggregationInput[]
    by: JobProposalScalarFieldEnum[] | JobProposalScalarFieldEnum
    having?: JobProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobProposalCountAggregateInputType | true
    _min?: JobProposalMinAggregateInputType
    _max?: JobProposalMaxAggregateInputType
  }

  export type JobProposalGroupByOutputType = {
    id: string
    companyId: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense: boolean
    hasCar: boolean
    minSalary: string | null
    maxSalary: string | null
    notes: string | null
    status: string
    contractType: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobProposalCountAggregateOutputType | null
    _min: JobProposalMinAggregateOutputType | null
    _max: JobProposalMaxAggregateOutputType | null
  }

  type GetJobProposalGroupByPayload<T extends JobProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobProposalGroupByOutputType[P]>
            : GetScalarType<T[P], JobProposalGroupByOutputType[P]>
        }
      >
    >


  export type JobProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    professions?: boolean
    locations?: boolean
    educationTitle?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    notes?: boolean
    status?: boolean
    contractType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    responses?: boolean | JobProposal$responsesArgs<ExtArgs>
    _count?: boolean | JobProposalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobProposal"]>

  export type JobProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    professions?: boolean
    locations?: boolean
    educationTitle?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    notes?: boolean
    status?: boolean
    contractType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobProposal"]>

  export type JobProposalSelectScalar = {
    id?: boolean
    companyId?: boolean
    professions?: boolean
    locations?: boolean
    educationTitle?: boolean
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: boolean
    maxSalary?: boolean
    notes?: boolean
    status?: boolean
    contractType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    responses?: boolean | JobProposal$responsesArgs<ExtArgs>
    _count?: boolean | JobProposalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }

  export type $JobProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobProposal"
    objects: {
      company: Prisma.$CompanyProfilePayload<ExtArgs>
      responses: Prisma.$ProposalResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      professions: string
      locations: string
      educationTitle: string
      hasLicense: boolean
      hasCar: boolean
      minSalary: string | null
      maxSalary: string | null
      notes: string | null
      status: string
      contractType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobProposal"]>
    composites: {}
  }

  type JobProposalGetPayload<S extends boolean | null | undefined | JobProposalDefaultArgs> = $Result.GetResult<Prisma.$JobProposalPayload, S>

  type JobProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobProposalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobProposalCountAggregateInputType | true
    }

  export interface JobProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobProposal'], meta: { name: 'JobProposal' } }
    /**
     * Find zero or one JobProposal that matches the filter.
     * @param {JobProposalFindUniqueArgs} args - Arguments to find a JobProposal
     * @example
     * // Get one JobProposal
     * const jobProposal = await prisma.jobProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobProposalFindUniqueArgs>(args: SelectSubset<T, JobProposalFindUniqueArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobProposal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobProposalFindUniqueOrThrowArgs} args - Arguments to find a JobProposal
     * @example
     * // Get one JobProposal
     * const jobProposal = await prisma.jobProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, JobProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalFindFirstArgs} args - Arguments to find a JobProposal
     * @example
     * // Get one JobProposal
     * const jobProposal = await prisma.jobProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobProposalFindFirstArgs>(args?: SelectSubset<T, JobProposalFindFirstArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalFindFirstOrThrowArgs} args - Arguments to find a JobProposal
     * @example
     * // Get one JobProposal
     * const jobProposal = await prisma.jobProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, JobProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobProposals
     * const jobProposals = await prisma.jobProposal.findMany()
     * 
     * // Get first 10 JobProposals
     * const jobProposals = await prisma.jobProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobProposalWithIdOnly = await prisma.jobProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobProposalFindManyArgs>(args?: SelectSubset<T, JobProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobProposal.
     * @param {JobProposalCreateArgs} args - Arguments to create a JobProposal.
     * @example
     * // Create one JobProposal
     * const JobProposal = await prisma.jobProposal.create({
     *   data: {
     *     // ... data to create a JobProposal
     *   }
     * })
     * 
     */
    create<T extends JobProposalCreateArgs>(args: SelectSubset<T, JobProposalCreateArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobProposals.
     * @param {JobProposalCreateManyArgs} args - Arguments to create many JobProposals.
     * @example
     * // Create many JobProposals
     * const jobProposal = await prisma.jobProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobProposalCreateManyArgs>(args?: SelectSubset<T, JobProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobProposals and returns the data saved in the database.
     * @param {JobProposalCreateManyAndReturnArgs} args - Arguments to create many JobProposals.
     * @example
     * // Create many JobProposals
     * const jobProposal = await prisma.jobProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobProposals and only return the `id`
     * const jobProposalWithIdOnly = await prisma.jobProposal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, JobProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JobProposal.
     * @param {JobProposalDeleteArgs} args - Arguments to delete one JobProposal.
     * @example
     * // Delete one JobProposal
     * const JobProposal = await prisma.jobProposal.delete({
     *   where: {
     *     // ... filter to delete one JobProposal
     *   }
     * })
     * 
     */
    delete<T extends JobProposalDeleteArgs>(args: SelectSubset<T, JobProposalDeleteArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobProposal.
     * @param {JobProposalUpdateArgs} args - Arguments to update one JobProposal.
     * @example
     * // Update one JobProposal
     * const jobProposal = await prisma.jobProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobProposalUpdateArgs>(args: SelectSubset<T, JobProposalUpdateArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobProposals.
     * @param {JobProposalDeleteManyArgs} args - Arguments to filter JobProposals to delete.
     * @example
     * // Delete a few JobProposals
     * const { count } = await prisma.jobProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobProposalDeleteManyArgs>(args?: SelectSubset<T, JobProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobProposals
     * const jobProposal = await prisma.jobProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobProposalUpdateManyArgs>(args: SelectSubset<T, JobProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobProposal.
     * @param {JobProposalUpsertArgs} args - Arguments to update or create a JobProposal.
     * @example
     * // Update or create a JobProposal
     * const jobProposal = await prisma.jobProposal.upsert({
     *   create: {
     *     // ... data to create a JobProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobProposal we want to update
     *   }
     * })
     */
    upsert<T extends JobProposalUpsertArgs>(args: SelectSubset<T, JobProposalUpsertArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalCountArgs} args - Arguments to filter JobProposals to count.
     * @example
     * // Count the number of JobProposals
     * const count = await prisma.jobProposal.count({
     *   where: {
     *     // ... the filter for the JobProposals we want to count
     *   }
     * })
    **/
    count<T extends JobProposalCountArgs>(
      args?: Subset<T, JobProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobProposalAggregateArgs>(args: Subset<T, JobProposalAggregateArgs>): Prisma.PrismaPromise<GetJobProposalAggregateType<T>>

    /**
     * Group by JobProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobProposalGroupByArgs['orderBy'] }
        : { orderBy?: JobProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobProposal model
   */
  readonly fields: JobProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfileDefaultArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responses<T extends JobProposal$responsesArgs<ExtArgs> = {}>(args?: Subset<T, JobProposal$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobProposal model
   */ 
  interface JobProposalFieldRefs {
    readonly id: FieldRef<"JobProposal", 'String'>
    readonly companyId: FieldRef<"JobProposal", 'String'>
    readonly professions: FieldRef<"JobProposal", 'String'>
    readonly locations: FieldRef<"JobProposal", 'String'>
    readonly educationTitle: FieldRef<"JobProposal", 'String'>
    readonly hasLicense: FieldRef<"JobProposal", 'Boolean'>
    readonly hasCar: FieldRef<"JobProposal", 'Boolean'>
    readonly minSalary: FieldRef<"JobProposal", 'String'>
    readonly maxSalary: FieldRef<"JobProposal", 'String'>
    readonly notes: FieldRef<"JobProposal", 'String'>
    readonly status: FieldRef<"JobProposal", 'String'>
    readonly contractType: FieldRef<"JobProposal", 'String'>
    readonly createdAt: FieldRef<"JobProposal", 'DateTime'>
    readonly updatedAt: FieldRef<"JobProposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobProposal findUnique
   */
  export type JobProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter, which JobProposal to fetch.
     */
    where: JobProposalWhereUniqueInput
  }

  /**
   * JobProposal findUniqueOrThrow
   */
  export type JobProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter, which JobProposal to fetch.
     */
    where: JobProposalWhereUniqueInput
  }

  /**
   * JobProposal findFirst
   */
  export type JobProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter, which JobProposal to fetch.
     */
    where?: JobProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobProposals to fetch.
     */
    orderBy?: JobProposalOrderByWithRelationInput | JobProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobProposals.
     */
    cursor?: JobProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobProposals.
     */
    distinct?: JobProposalScalarFieldEnum | JobProposalScalarFieldEnum[]
  }

  /**
   * JobProposal findFirstOrThrow
   */
  export type JobProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter, which JobProposal to fetch.
     */
    where?: JobProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobProposals to fetch.
     */
    orderBy?: JobProposalOrderByWithRelationInput | JobProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobProposals.
     */
    cursor?: JobProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobProposals.
     */
    distinct?: JobProposalScalarFieldEnum | JobProposalScalarFieldEnum[]
  }

  /**
   * JobProposal findMany
   */
  export type JobProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter, which JobProposals to fetch.
     */
    where?: JobProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobProposals to fetch.
     */
    orderBy?: JobProposalOrderByWithRelationInput | JobProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobProposals.
     */
    cursor?: JobProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobProposals.
     */
    skip?: number
    distinct?: JobProposalScalarFieldEnum | JobProposalScalarFieldEnum[]
  }

  /**
   * JobProposal create
   */
  export type JobProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a JobProposal.
     */
    data: XOR<JobProposalCreateInput, JobProposalUncheckedCreateInput>
  }

  /**
   * JobProposal createMany
   */
  export type JobProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobProposals.
     */
    data: JobProposalCreateManyInput | JobProposalCreateManyInput[]
  }

  /**
   * JobProposal createManyAndReturn
   */
  export type JobProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JobProposals.
     */
    data: JobProposalCreateManyInput | JobProposalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobProposal update
   */
  export type JobProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a JobProposal.
     */
    data: XOR<JobProposalUpdateInput, JobProposalUncheckedUpdateInput>
    /**
     * Choose, which JobProposal to update.
     */
    where: JobProposalWhereUniqueInput
  }

  /**
   * JobProposal updateMany
   */
  export type JobProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobProposals.
     */
    data: XOR<JobProposalUpdateManyMutationInput, JobProposalUncheckedUpdateManyInput>
    /**
     * Filter which JobProposals to update
     */
    where?: JobProposalWhereInput
  }

  /**
   * JobProposal upsert
   */
  export type JobProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the JobProposal to update in case it exists.
     */
    where: JobProposalWhereUniqueInput
    /**
     * In case the JobProposal found by the `where` argument doesn't exist, create a new JobProposal with this data.
     */
    create: XOR<JobProposalCreateInput, JobProposalUncheckedCreateInput>
    /**
     * In case the JobProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobProposalUpdateInput, JobProposalUncheckedUpdateInput>
  }

  /**
   * JobProposal delete
   */
  export type JobProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
    /**
     * Filter which JobProposal to delete.
     */
    where: JobProposalWhereUniqueInput
  }

  /**
   * JobProposal deleteMany
   */
  export type JobProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobProposals to delete
     */
    where?: JobProposalWhereInput
  }

  /**
   * JobProposal.responses
   */
  export type JobProposal$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    where?: ProposalResponseWhereInput
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    cursor?: ProposalResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalResponseScalarFieldEnum | ProposalResponseScalarFieldEnum[]
  }

  /**
   * JobProposal without action
   */
  export type JobProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobProposal
     */
    select?: JobProposalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobProposalInclude<ExtArgs> | null
  }


  /**
   * Model ProposalResponse
   */

  export type AggregateProposalResponse = {
    _count: ProposalResponseCountAggregateOutputType | null
    _min: ProposalResponseMinAggregateOutputType | null
    _max: ProposalResponseMaxAggregateOutputType | null
  }

  export type ProposalResponseMinAggregateOutputType = {
    id: string | null
    proposalId: string | null
    workerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ProposalResponseMaxAggregateOutputType = {
    id: string | null
    proposalId: string | null
    workerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ProposalResponseCountAggregateOutputType = {
    id: number
    proposalId: number
    workerId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ProposalResponseMinAggregateInputType = {
    id?: true
    proposalId?: true
    workerId?: true
    status?: true
    createdAt?: true
  }

  export type ProposalResponseMaxAggregateInputType = {
    id?: true
    proposalId?: true
    workerId?: true
    status?: true
    createdAt?: true
  }

  export type ProposalResponseCountAggregateInputType = {
    id?: true
    proposalId?: true
    workerId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ProposalResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalResponse to aggregate.
     */
    where?: ProposalResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalResponses to fetch.
     */
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalResponses
    **/
    _count?: true | ProposalResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalResponseMaxAggregateInputType
  }

  export type GetProposalResponseAggregateType<T extends ProposalResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalResponse[P]>
      : GetScalarType<T[P], AggregateProposalResponse[P]>
  }




  export type ProposalResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalResponseWhereInput
    orderBy?: ProposalResponseOrderByWithAggregationInput | ProposalResponseOrderByWithAggregationInput[]
    by: ProposalResponseScalarFieldEnum[] | ProposalResponseScalarFieldEnum
    having?: ProposalResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalResponseCountAggregateInputType | true
    _min?: ProposalResponseMinAggregateInputType
    _max?: ProposalResponseMaxAggregateInputType
  }

  export type ProposalResponseGroupByOutputType = {
    id: string
    proposalId: string
    workerId: string
    status: string
    createdAt: Date
    _count: ProposalResponseCountAggregateOutputType | null
    _min: ProposalResponseMinAggregateOutputType | null
    _max: ProposalResponseMaxAggregateOutputType | null
  }

  type GetProposalResponseGroupByPayload<T extends ProposalResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalResponseGroupByOutputType[P]>
        }
      >
    >


  export type ProposalResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    workerId?: boolean
    status?: boolean
    createdAt?: boolean
    proposal?: boolean | JobProposalDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalResponse"]>

  export type ProposalResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    workerId?: boolean
    status?: boolean
    createdAt?: boolean
    proposal?: boolean | JobProposalDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalResponse"]>

  export type ProposalResponseSelectScalar = {
    id?: boolean
    proposalId?: boolean
    workerId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ProposalResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | JobProposalDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type ProposalResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | JobProposalDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $ProposalResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalResponse"
    objects: {
      proposal: Prisma.$JobProposalPayload<ExtArgs>
      worker: Prisma.$WorkerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proposalId: string
      workerId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["proposalResponse"]>
    composites: {}
  }

  type ProposalResponseGetPayload<S extends boolean | null | undefined | ProposalResponseDefaultArgs> = $Result.GetResult<Prisma.$ProposalResponsePayload, S>

  type ProposalResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProposalResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProposalResponseCountAggregateInputType | true
    }

  export interface ProposalResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalResponse'], meta: { name: 'ProposalResponse' } }
    /**
     * Find zero or one ProposalResponse that matches the filter.
     * @param {ProposalResponseFindUniqueArgs} args - Arguments to find a ProposalResponse
     * @example
     * // Get one ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalResponseFindUniqueArgs>(args: SelectSubset<T, ProposalResponseFindUniqueArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProposalResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProposalResponseFindUniqueOrThrowArgs} args - Arguments to find a ProposalResponse
     * @example
     * // Get one ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProposalResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseFindFirstArgs} args - Arguments to find a ProposalResponse
     * @example
     * // Get one ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalResponseFindFirstArgs>(args?: SelectSubset<T, ProposalResponseFindFirstArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProposalResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseFindFirstOrThrowArgs} args - Arguments to find a ProposalResponse
     * @example
     * // Get one ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProposalResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalResponses
     * const proposalResponses = await prisma.proposalResponse.findMany()
     * 
     * // Get first 10 ProposalResponses
     * const proposalResponses = await prisma.proposalResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalResponseWithIdOnly = await prisma.proposalResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalResponseFindManyArgs>(args?: SelectSubset<T, ProposalResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProposalResponse.
     * @param {ProposalResponseCreateArgs} args - Arguments to create a ProposalResponse.
     * @example
     * // Create one ProposalResponse
     * const ProposalResponse = await prisma.proposalResponse.create({
     *   data: {
     *     // ... data to create a ProposalResponse
     *   }
     * })
     * 
     */
    create<T extends ProposalResponseCreateArgs>(args: SelectSubset<T, ProposalResponseCreateArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProposalResponses.
     * @param {ProposalResponseCreateManyArgs} args - Arguments to create many ProposalResponses.
     * @example
     * // Create many ProposalResponses
     * const proposalResponse = await prisma.proposalResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalResponseCreateManyArgs>(args?: SelectSubset<T, ProposalResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProposalResponses and returns the data saved in the database.
     * @param {ProposalResponseCreateManyAndReturnArgs} args - Arguments to create many ProposalResponses.
     * @example
     * // Create many ProposalResponses
     * const proposalResponse = await prisma.proposalResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProposalResponses and only return the `id`
     * const proposalResponseWithIdOnly = await prisma.proposalResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProposalResponse.
     * @param {ProposalResponseDeleteArgs} args - Arguments to delete one ProposalResponse.
     * @example
     * // Delete one ProposalResponse
     * const ProposalResponse = await prisma.proposalResponse.delete({
     *   where: {
     *     // ... filter to delete one ProposalResponse
     *   }
     * })
     * 
     */
    delete<T extends ProposalResponseDeleteArgs>(args: SelectSubset<T, ProposalResponseDeleteArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProposalResponse.
     * @param {ProposalResponseUpdateArgs} args - Arguments to update one ProposalResponse.
     * @example
     * // Update one ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalResponseUpdateArgs>(args: SelectSubset<T, ProposalResponseUpdateArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProposalResponses.
     * @param {ProposalResponseDeleteManyArgs} args - Arguments to filter ProposalResponses to delete.
     * @example
     * // Delete a few ProposalResponses
     * const { count } = await prisma.proposalResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalResponseDeleteManyArgs>(args?: SelectSubset<T, ProposalResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalResponses
     * const proposalResponse = await prisma.proposalResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalResponseUpdateManyArgs>(args: SelectSubset<T, ProposalResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProposalResponse.
     * @param {ProposalResponseUpsertArgs} args - Arguments to update or create a ProposalResponse.
     * @example
     * // Update or create a ProposalResponse
     * const proposalResponse = await prisma.proposalResponse.upsert({
     *   create: {
     *     // ... data to create a ProposalResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalResponse we want to update
     *   }
     * })
     */
    upsert<T extends ProposalResponseUpsertArgs>(args: SelectSubset<T, ProposalResponseUpsertArgs<ExtArgs>>): Prisma__ProposalResponseClient<$Result.GetResult<Prisma.$ProposalResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProposalResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseCountArgs} args - Arguments to filter ProposalResponses to count.
     * @example
     * // Count the number of ProposalResponses
     * const count = await prisma.proposalResponse.count({
     *   where: {
     *     // ... the filter for the ProposalResponses we want to count
     *   }
     * })
    **/
    count<T extends ProposalResponseCountArgs>(
      args?: Subset<T, ProposalResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalResponseAggregateArgs>(args: Subset<T, ProposalResponseAggregateArgs>): Prisma.PrismaPromise<GetProposalResponseAggregateType<T>>

    /**
     * Group by ProposalResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalResponseGroupByArgs['orderBy'] }
        : { orderBy?: ProposalResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalResponse model
   */
  readonly fields: ProposalResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposal<T extends JobProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobProposalDefaultArgs<ExtArgs>>): Prisma__JobProposalClient<$Result.GetResult<Prisma.$JobProposalPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    worker<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProposalResponse model
   */ 
  interface ProposalResponseFieldRefs {
    readonly id: FieldRef<"ProposalResponse", 'String'>
    readonly proposalId: FieldRef<"ProposalResponse", 'String'>
    readonly workerId: FieldRef<"ProposalResponse", 'String'>
    readonly status: FieldRef<"ProposalResponse", 'String'>
    readonly createdAt: FieldRef<"ProposalResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProposalResponse findUnique
   */
  export type ProposalResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter, which ProposalResponse to fetch.
     */
    where: ProposalResponseWhereUniqueInput
  }

  /**
   * ProposalResponse findUniqueOrThrow
   */
  export type ProposalResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter, which ProposalResponse to fetch.
     */
    where: ProposalResponseWhereUniqueInput
  }

  /**
   * ProposalResponse findFirst
   */
  export type ProposalResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter, which ProposalResponse to fetch.
     */
    where?: ProposalResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalResponses to fetch.
     */
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalResponses.
     */
    cursor?: ProposalResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalResponses.
     */
    distinct?: ProposalResponseScalarFieldEnum | ProposalResponseScalarFieldEnum[]
  }

  /**
   * ProposalResponse findFirstOrThrow
   */
  export type ProposalResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter, which ProposalResponse to fetch.
     */
    where?: ProposalResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalResponses to fetch.
     */
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalResponses.
     */
    cursor?: ProposalResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalResponses.
     */
    distinct?: ProposalResponseScalarFieldEnum | ProposalResponseScalarFieldEnum[]
  }

  /**
   * ProposalResponse findMany
   */
  export type ProposalResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter, which ProposalResponses to fetch.
     */
    where?: ProposalResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalResponses to fetch.
     */
    orderBy?: ProposalResponseOrderByWithRelationInput | ProposalResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalResponses.
     */
    cursor?: ProposalResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalResponses.
     */
    skip?: number
    distinct?: ProposalResponseScalarFieldEnum | ProposalResponseScalarFieldEnum[]
  }

  /**
   * ProposalResponse create
   */
  export type ProposalResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProposalResponse.
     */
    data: XOR<ProposalResponseCreateInput, ProposalResponseUncheckedCreateInput>
  }

  /**
   * ProposalResponse createMany
   */
  export type ProposalResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalResponses.
     */
    data: ProposalResponseCreateManyInput | ProposalResponseCreateManyInput[]
  }

  /**
   * ProposalResponse createManyAndReturn
   */
  export type ProposalResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProposalResponses.
     */
    data: ProposalResponseCreateManyInput | ProposalResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProposalResponse update
   */
  export type ProposalResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProposalResponse.
     */
    data: XOR<ProposalResponseUpdateInput, ProposalResponseUncheckedUpdateInput>
    /**
     * Choose, which ProposalResponse to update.
     */
    where: ProposalResponseWhereUniqueInput
  }

  /**
   * ProposalResponse updateMany
   */
  export type ProposalResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalResponses.
     */
    data: XOR<ProposalResponseUpdateManyMutationInput, ProposalResponseUncheckedUpdateManyInput>
    /**
     * Filter which ProposalResponses to update
     */
    where?: ProposalResponseWhereInput
  }

  /**
   * ProposalResponse upsert
   */
  export type ProposalResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProposalResponse to update in case it exists.
     */
    where: ProposalResponseWhereUniqueInput
    /**
     * In case the ProposalResponse found by the `where` argument doesn't exist, create a new ProposalResponse with this data.
     */
    create: XOR<ProposalResponseCreateInput, ProposalResponseUncheckedCreateInput>
    /**
     * In case the ProposalResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalResponseUpdateInput, ProposalResponseUncheckedUpdateInput>
  }

  /**
   * ProposalResponse delete
   */
  export type ProposalResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
    /**
     * Filter which ProposalResponse to delete.
     */
    where: ProposalResponseWhereUniqueInput
  }

  /**
   * ProposalResponse deleteMany
   */
  export type ProposalResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalResponses to delete
     */
    where?: ProposalResponseWhereInput
  }

  /**
   * ProposalResponse without action
   */
  export type ProposalResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalResponse
     */
    select?: ProposalResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalResponseInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    workerId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    workerId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    companyId: number
    workerId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    companyId: string
    workerId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    createdAt?: boolean
  }

  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      company: Prisma.$CompanyProfilePayload<ExtArgs>
      worker: Prisma.$WorkerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      workerId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfileDefaultArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    worker<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */ 
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly companyId: FieldRef<"Favorite", 'String'>
    readonly workerId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model InterviewRequest
   */

  export type AggregateInterviewRequest = {
    _count: InterviewRequestCountAggregateOutputType | null
    _min: InterviewRequestMinAggregateOutputType | null
    _max: InterviewRequestMaxAggregateOutputType | null
  }

  export type InterviewRequestMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    workerId: string | null
    message: string | null
    interviewDate: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InterviewRequestMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    workerId: string | null
    message: string | null
    interviewDate: string | null
    status: string | null
    createdAt: Date | null
  }

  export type InterviewRequestCountAggregateOutputType = {
    id: number
    companyId: number
    workerId: number
    message: number
    interviewDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type InterviewRequestMinAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    message?: true
    interviewDate?: true
    status?: true
    createdAt?: true
  }

  export type InterviewRequestMaxAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    message?: true
    interviewDate?: true
    status?: true
    createdAt?: true
  }

  export type InterviewRequestCountAggregateInputType = {
    id?: true
    companyId?: true
    workerId?: true
    message?: true
    interviewDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InterviewRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewRequest to aggregate.
     */
    where?: InterviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewRequests to fetch.
     */
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewRequests
    **/
    _count?: true | InterviewRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewRequestMaxAggregateInputType
  }

  export type GetInterviewRequestAggregateType<T extends InterviewRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewRequest[P]>
      : GetScalarType<T[P], AggregateInterviewRequest[P]>
  }




  export type InterviewRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewRequestWhereInput
    orderBy?: InterviewRequestOrderByWithAggregationInput | InterviewRequestOrderByWithAggregationInput[]
    by: InterviewRequestScalarFieldEnum[] | InterviewRequestScalarFieldEnum
    having?: InterviewRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewRequestCountAggregateInputType | true
    _min?: InterviewRequestMinAggregateInputType
    _max?: InterviewRequestMaxAggregateInputType
  }

  export type InterviewRequestGroupByOutputType = {
    id: string
    companyId: string
    workerId: string
    message: string
    interviewDate: string
    status: string
    createdAt: Date
    _count: InterviewRequestCountAggregateOutputType | null
    _min: InterviewRequestMinAggregateOutputType | null
    _max: InterviewRequestMaxAggregateOutputType | null
  }

  type GetInterviewRequestGroupByPayload<T extends InterviewRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewRequestGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewRequestGroupByOutputType[P]>
        }
      >
    >


  export type InterviewRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    message?: boolean
    interviewDate?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewRequest"]>

  export type InterviewRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    message?: boolean
    interviewDate?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewRequest"]>

  export type InterviewRequestSelectScalar = {
    id?: boolean
    companyId?: boolean
    workerId?: boolean
    message?: boolean
    interviewDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InterviewRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type InterviewRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $InterviewRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewRequest"
    objects: {
      company: Prisma.$CompanyProfilePayload<ExtArgs>
      worker: Prisma.$WorkerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      workerId: string
      message: string
      interviewDate: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["interviewRequest"]>
    composites: {}
  }

  type InterviewRequestGetPayload<S extends boolean | null | undefined | InterviewRequestDefaultArgs> = $Result.GetResult<Prisma.$InterviewRequestPayload, S>

  type InterviewRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterviewRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InterviewRequestCountAggregateInputType | true
    }

  export interface InterviewRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewRequest'], meta: { name: 'InterviewRequest' } }
    /**
     * Find zero or one InterviewRequest that matches the filter.
     * @param {InterviewRequestFindUniqueArgs} args - Arguments to find a InterviewRequest
     * @example
     * // Get one InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewRequestFindUniqueArgs>(args: SelectSubset<T, InterviewRequestFindUniqueArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InterviewRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InterviewRequestFindUniqueOrThrowArgs} args - Arguments to find a InterviewRequest
     * @example
     * // Get one InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InterviewRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestFindFirstArgs} args - Arguments to find a InterviewRequest
     * @example
     * // Get one InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewRequestFindFirstArgs>(args?: SelectSubset<T, InterviewRequestFindFirstArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InterviewRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestFindFirstOrThrowArgs} args - Arguments to find a InterviewRequest
     * @example
     * // Get one InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InterviewRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewRequests
     * const interviewRequests = await prisma.interviewRequest.findMany()
     * 
     * // Get first 10 InterviewRequests
     * const interviewRequests = await prisma.interviewRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewRequestWithIdOnly = await prisma.interviewRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewRequestFindManyArgs>(args?: SelectSubset<T, InterviewRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InterviewRequest.
     * @param {InterviewRequestCreateArgs} args - Arguments to create a InterviewRequest.
     * @example
     * // Create one InterviewRequest
     * const InterviewRequest = await prisma.interviewRequest.create({
     *   data: {
     *     // ... data to create a InterviewRequest
     *   }
     * })
     * 
     */
    create<T extends InterviewRequestCreateArgs>(args: SelectSubset<T, InterviewRequestCreateArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InterviewRequests.
     * @param {InterviewRequestCreateManyArgs} args - Arguments to create many InterviewRequests.
     * @example
     * // Create many InterviewRequests
     * const interviewRequest = await prisma.interviewRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewRequestCreateManyArgs>(args?: SelectSubset<T, InterviewRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewRequests and returns the data saved in the database.
     * @param {InterviewRequestCreateManyAndReturnArgs} args - Arguments to create many InterviewRequests.
     * @example
     * // Create many InterviewRequests
     * const interviewRequest = await prisma.interviewRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewRequests and only return the `id`
     * const interviewRequestWithIdOnly = await prisma.interviewRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InterviewRequest.
     * @param {InterviewRequestDeleteArgs} args - Arguments to delete one InterviewRequest.
     * @example
     * // Delete one InterviewRequest
     * const InterviewRequest = await prisma.interviewRequest.delete({
     *   where: {
     *     // ... filter to delete one InterviewRequest
     *   }
     * })
     * 
     */
    delete<T extends InterviewRequestDeleteArgs>(args: SelectSubset<T, InterviewRequestDeleteArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InterviewRequest.
     * @param {InterviewRequestUpdateArgs} args - Arguments to update one InterviewRequest.
     * @example
     * // Update one InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewRequestUpdateArgs>(args: SelectSubset<T, InterviewRequestUpdateArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InterviewRequests.
     * @param {InterviewRequestDeleteManyArgs} args - Arguments to filter InterviewRequests to delete.
     * @example
     * // Delete a few InterviewRequests
     * const { count } = await prisma.interviewRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewRequestDeleteManyArgs>(args?: SelectSubset<T, InterviewRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewRequests
     * const interviewRequest = await prisma.interviewRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewRequestUpdateManyArgs>(args: SelectSubset<T, InterviewRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InterviewRequest.
     * @param {InterviewRequestUpsertArgs} args - Arguments to update or create a InterviewRequest.
     * @example
     * // Update or create a InterviewRequest
     * const interviewRequest = await prisma.interviewRequest.upsert({
     *   create: {
     *     // ... data to create a InterviewRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewRequest we want to update
     *   }
     * })
     */
    upsert<T extends InterviewRequestUpsertArgs>(args: SelectSubset<T, InterviewRequestUpsertArgs<ExtArgs>>): Prisma__InterviewRequestClient<$Result.GetResult<Prisma.$InterviewRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InterviewRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestCountArgs} args - Arguments to filter InterviewRequests to count.
     * @example
     * // Count the number of InterviewRequests
     * const count = await prisma.interviewRequest.count({
     *   where: {
     *     // ... the filter for the InterviewRequests we want to count
     *   }
     * })
    **/
    count<T extends InterviewRequestCountArgs>(
      args?: Subset<T, InterviewRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewRequestAggregateArgs>(args: Subset<T, InterviewRequestAggregateArgs>): Prisma.PrismaPromise<GetInterviewRequestAggregateType<T>>

    /**
     * Group by InterviewRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewRequestGroupByArgs['orderBy'] }
        : { orderBy?: InterviewRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewRequest model
   */
  readonly fields: InterviewRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfileDefaultArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    worker<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewRequest model
   */ 
  interface InterviewRequestFieldRefs {
    readonly id: FieldRef<"InterviewRequest", 'String'>
    readonly companyId: FieldRef<"InterviewRequest", 'String'>
    readonly workerId: FieldRef<"InterviewRequest", 'String'>
    readonly message: FieldRef<"InterviewRequest", 'String'>
    readonly interviewDate: FieldRef<"InterviewRequest", 'String'>
    readonly status: FieldRef<"InterviewRequest", 'String'>
    readonly createdAt: FieldRef<"InterviewRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewRequest findUnique
   */
  export type InterviewRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which InterviewRequest to fetch.
     */
    where: InterviewRequestWhereUniqueInput
  }

  /**
   * InterviewRequest findUniqueOrThrow
   */
  export type InterviewRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which InterviewRequest to fetch.
     */
    where: InterviewRequestWhereUniqueInput
  }

  /**
   * InterviewRequest findFirst
   */
  export type InterviewRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which InterviewRequest to fetch.
     */
    where?: InterviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewRequests to fetch.
     */
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewRequests.
     */
    cursor?: InterviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewRequests.
     */
    distinct?: InterviewRequestScalarFieldEnum | InterviewRequestScalarFieldEnum[]
  }

  /**
   * InterviewRequest findFirstOrThrow
   */
  export type InterviewRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which InterviewRequest to fetch.
     */
    where?: InterviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewRequests to fetch.
     */
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewRequests.
     */
    cursor?: InterviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewRequests.
     */
    distinct?: InterviewRequestScalarFieldEnum | InterviewRequestScalarFieldEnum[]
  }

  /**
   * InterviewRequest findMany
   */
  export type InterviewRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which InterviewRequests to fetch.
     */
    where?: InterviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewRequests to fetch.
     */
    orderBy?: InterviewRequestOrderByWithRelationInput | InterviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewRequests.
     */
    cursor?: InterviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewRequests.
     */
    skip?: number
    distinct?: InterviewRequestScalarFieldEnum | InterviewRequestScalarFieldEnum[]
  }

  /**
   * InterviewRequest create
   */
  export type InterviewRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewRequest.
     */
    data: XOR<InterviewRequestCreateInput, InterviewRequestUncheckedCreateInput>
  }

  /**
   * InterviewRequest createMany
   */
  export type InterviewRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewRequests.
     */
    data: InterviewRequestCreateManyInput | InterviewRequestCreateManyInput[]
  }

  /**
   * InterviewRequest createManyAndReturn
   */
  export type InterviewRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InterviewRequests.
     */
    data: InterviewRequestCreateManyInput | InterviewRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewRequest update
   */
  export type InterviewRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewRequest.
     */
    data: XOR<InterviewRequestUpdateInput, InterviewRequestUncheckedUpdateInput>
    /**
     * Choose, which InterviewRequest to update.
     */
    where: InterviewRequestWhereUniqueInput
  }

  /**
   * InterviewRequest updateMany
   */
  export type InterviewRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewRequests.
     */
    data: XOR<InterviewRequestUpdateManyMutationInput, InterviewRequestUncheckedUpdateManyInput>
    /**
     * Filter which InterviewRequests to update
     */
    where?: InterviewRequestWhereInput
  }

  /**
   * InterviewRequest upsert
   */
  export type InterviewRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewRequest to update in case it exists.
     */
    where: InterviewRequestWhereUniqueInput
    /**
     * In case the InterviewRequest found by the `where` argument doesn't exist, create a new InterviewRequest with this data.
     */
    create: XOR<InterviewRequestCreateInput, InterviewRequestUncheckedCreateInput>
    /**
     * In case the InterviewRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewRequestUpdateInput, InterviewRequestUncheckedUpdateInput>
  }

  /**
   * InterviewRequest delete
   */
  export type InterviewRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
    /**
     * Filter which InterviewRequest to delete.
     */
    where: InterviewRequestWhereUniqueInput
  }

  /**
   * InterviewRequest deleteMany
   */
  export type InterviewRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewRequests to delete
     */
    where?: InterviewRequestWhereInput
  }

  /**
   * InterviewRequest without action
   */
  export type InterviewRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewRequest
     */
    select?: InterviewRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewRequestInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    type: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    type: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    type: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    type?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    type?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    read: boolean
    type: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      read: boolean
      type: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: string | null
    workerProfileId: string | null
    companyName: string | null
    role: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    city: string | null
    province: string | null
    sigla: string | null
    createdAt: Date | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: string | null
    workerProfileId: string | null
    companyName: string | null
    role: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    city: string | null
    province: string | null
    sigla: string | null
    createdAt: Date | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    workerProfileId: number
    companyName: number
    role: number
    startDate: number
    endDate: number
    description: number
    city: number
    province: number
    sigla: number
    createdAt: number
    _all: number
  }


  export type WorkExperienceMinAggregateInputType = {
    id?: true
    workerProfileId?: true
    companyName?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
    city?: true
    province?: true
    sigla?: true
    createdAt?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    workerProfileId?: true
    companyName?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
    city?: true
    province?: true
    sigla?: true
    createdAt?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    workerProfileId?: true
    companyName?: true
    role?: true
    startDate?: true
    endDate?: true
    description?: true
    city?: true
    province?: true
    sigla?: true
    createdAt?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: string
    workerProfileId: string
    companyName: string
    role: string
    startDate: string
    endDate: string | null
    description: string | null
    city: string | null
    province: string | null
    sigla: string | null
    createdAt: Date
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerProfileId?: boolean
    companyName?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    createdAt?: boolean
    workerProfile?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workerProfileId?: boolean
    companyName?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    createdAt?: boolean
    workerProfile?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    id?: boolean
    workerProfileId?: boolean
    companyName?: boolean
    role?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    city?: boolean
    province?: boolean
    sigla?: boolean
    createdAt?: boolean
  }

  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workerProfile?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workerProfile?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      workerProfile: Prisma.$WorkerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workerProfileId: string
      companyName: string
      role: string
      startDate: string
      endDate: string | null
      description: string | null
      city: string | null
      province: string | null
      sigla: string | null
      createdAt: Date
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workerProfile<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */ 
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'String'>
    readonly workerProfileId: FieldRef<"WorkExperience", 'String'>
    readonly companyName: FieldRef<"WorkExperience", 'String'>
    readonly role: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'String'>
    readonly endDate: FieldRef<"WorkExperience", 'String'>
    readonly description: FieldRef<"WorkExperience", 'String'>
    readonly city: FieldRef<"WorkExperience", 'String'>
    readonly province: FieldRef<"WorkExperience", 'String'>
    readonly sigla: FieldRef<"WorkExperience", 'String'>
    readonly createdAt: FieldRef<"WorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    photoUrl: 'photoUrl',
    phone: 'phone',
    city: 'city',
    province: 'province',
    sigla: 'sigla',
    region: 'region',
    profession: 'profession',
    educationLevel: 'educationLevel',
    educationField: 'educationField',
    educationTitles: 'educationTitles',
    skills: 'skills',
    certifications: 'certifications',
    hasLicense: 'hasLicense',
    hasCar: 'hasCar',
    availabilityStatus: 'availabilityStatus',
    availabilityDetails: 'availabilityDetails',
    maxDistanceKm: 'maxDistanceKm',
    desiredContract: 'desiredContract',
    desiredSalary: 'desiredSalary',
    availabilityRegionsProvinces: 'availabilityRegionsProvinces',
    availabilityContracts: 'availabilityContracts',
    availabilityRoles: 'availabilityRoles',
    notes: 'notes',
    availabilityNotes: 'availabilityNotes',
    availabilityUpdatedAt: 'availabilityUpdatedAt',
    cvPdfUrl: 'cvPdfUrl',
    videoPresentationUrl: 'videoPresentationUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkerProfileScalarFieldEnum = (typeof WorkerProfileScalarFieldEnum)[keyof typeof WorkerProfileScalarFieldEnum]


  export const CompanyProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyType: 'companyType',
    companyName: 'companyName',
    address: 'address',
    vatNumber: 'vatNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    residenzaCapCitta: 'residenzaCapCitta',
    fiscalCode: 'fiscalCode',
    industry: 'industry',
    city: 'city',
    province: 'province',
    sigla: 'sigla',
    contactPerson: 'contactPerson',
    contactPhone: 'contactPhone',
    logoUrl: 'logoUrl',
    idDocumentUrl: 'idDocumentUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyProfileScalarFieldEnum = (typeof CompanyProfileScalarFieldEnum)[keyof typeof CompanyProfileScalarFieldEnum]


  export const JobProposalScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    professions: 'professions',
    locations: 'locations',
    educationTitle: 'educationTitle',
    hasLicense: 'hasLicense',
    hasCar: 'hasCar',
    minSalary: 'minSalary',
    maxSalary: 'maxSalary',
    notes: 'notes',
    status: 'status',
    contractType: 'contractType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobProposalScalarFieldEnum = (typeof JobProposalScalarFieldEnum)[keyof typeof JobProposalScalarFieldEnum]


  export const ProposalResponseScalarFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    workerId: 'workerId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ProposalResponseScalarFieldEnum = (typeof ProposalResponseScalarFieldEnum)[keyof typeof ProposalResponseScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    workerId: 'workerId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const InterviewRequestScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    workerId: 'workerId',
    message: 'message',
    interviewDate: 'interviewDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InterviewRequestScalarFieldEnum = (typeof InterviewRequestScalarFieldEnum)[keyof typeof InterviewRequestScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    workerProfileId: 'workerProfileId',
    companyName: 'companyName',
    role: 'role',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    city: 'city',
    province: 'province',
    sigla: 'sigla',
    createdAt: 'createdAt'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    workerProfile?: XOR<WorkerProfileNullableRelationFilter, WorkerProfileWhereInput> | null
    companyProfile?: XOR<CompanyProfileNullableRelationFilter, CompanyProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    workerProfile?: WorkerProfileOrderByWithRelationInput
    companyProfile?: CompanyProfileOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    workerProfile?: XOR<WorkerProfileNullableRelationFilter, WorkerProfileWhereInput> | null
    companyProfile?: XOR<CompanyProfileNullableRelationFilter, CompanyProfileWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkerProfileWhereInput = {
    AND?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    OR?: WorkerProfileWhereInput[]
    NOT?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    id?: StringFilter<"WorkerProfile"> | string
    userId?: StringFilter<"WorkerProfile"> | string
    firstName?: StringFilter<"WorkerProfile"> | string
    lastName?: StringFilter<"WorkerProfile"> | string
    photoUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    phone?: StringNullableFilter<"WorkerProfile"> | string | null
    city?: StringFilter<"WorkerProfile"> | string
    province?: StringFilter<"WorkerProfile"> | string
    sigla?: StringNullableFilter<"WorkerProfile"> | string | null
    region?: StringFilter<"WorkerProfile"> | string
    profession?: StringFilter<"WorkerProfile"> | string
    educationLevel?: StringFilter<"WorkerProfile"> | string
    educationField?: StringNullableFilter<"WorkerProfile"> | string | null
    educationTitles?: StringFilter<"WorkerProfile"> | string
    skills?: StringFilter<"WorkerProfile"> | string
    certifications?: StringNullableFilter<"WorkerProfile"> | string | null
    hasLicense?: BoolFilter<"WorkerProfile"> | boolean
    hasCar?: BoolFilter<"WorkerProfile"> | boolean
    availabilityStatus?: StringFilter<"WorkerProfile"> | string
    availabilityDetails?: StringNullableFilter<"WorkerProfile"> | string | null
    maxDistanceKm?: IntFilter<"WorkerProfile"> | number
    desiredContract?: StringNullableFilter<"WorkerProfile"> | string | null
    desiredSalary?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityRegionsProvinces?: StringFilter<"WorkerProfile"> | string
    availabilityContracts?: StringFilter<"WorkerProfile"> | string
    availabilityRoles?: StringFilter<"WorkerProfile"> | string
    notes?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityNotes?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityUpdatedAt?: DateTimeNullableFilter<"WorkerProfile"> | Date | string | null
    cvPdfUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    videoPresentationUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    createdAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    favoritedBy?: FavoriteListRelationFilter
    interviewRequests?: InterviewRequestListRelationFilter
    workExperiences?: WorkExperienceListRelationFilter
    proposalResponses?: ProposalResponseListRelationFilter
  }

  export type WorkerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrderInput | SortOrder
    region?: SortOrder
    profession?: SortOrder
    educationLevel?: SortOrder
    educationField?: SortOrderInput | SortOrder
    educationTitles?: SortOrder
    skills?: SortOrder
    certifications?: SortOrderInput | SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    availabilityStatus?: SortOrder
    availabilityDetails?: SortOrderInput | SortOrder
    maxDistanceKm?: SortOrder
    desiredContract?: SortOrderInput | SortOrder
    desiredSalary?: SortOrderInput | SortOrder
    availabilityRegionsProvinces?: SortOrder
    availabilityContracts?: SortOrder
    availabilityRoles?: SortOrder
    notes?: SortOrderInput | SortOrder
    availabilityNotes?: SortOrderInput | SortOrder
    availabilityUpdatedAt?: SortOrderInput | SortOrder
    cvPdfUrl?: SortOrderInput | SortOrder
    videoPresentationUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    favoritedBy?: FavoriteOrderByRelationAggregateInput
    interviewRequests?: InterviewRequestOrderByRelationAggregateInput
    workExperiences?: WorkExperienceOrderByRelationAggregateInput
    proposalResponses?: ProposalResponseOrderByRelationAggregateInput
  }

  export type WorkerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    OR?: WorkerProfileWhereInput[]
    NOT?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    firstName?: StringFilter<"WorkerProfile"> | string
    lastName?: StringFilter<"WorkerProfile"> | string
    photoUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    phone?: StringNullableFilter<"WorkerProfile"> | string | null
    city?: StringFilter<"WorkerProfile"> | string
    province?: StringFilter<"WorkerProfile"> | string
    sigla?: StringNullableFilter<"WorkerProfile"> | string | null
    region?: StringFilter<"WorkerProfile"> | string
    profession?: StringFilter<"WorkerProfile"> | string
    educationLevel?: StringFilter<"WorkerProfile"> | string
    educationField?: StringNullableFilter<"WorkerProfile"> | string | null
    educationTitles?: StringFilter<"WorkerProfile"> | string
    skills?: StringFilter<"WorkerProfile"> | string
    certifications?: StringNullableFilter<"WorkerProfile"> | string | null
    hasLicense?: BoolFilter<"WorkerProfile"> | boolean
    hasCar?: BoolFilter<"WorkerProfile"> | boolean
    availabilityStatus?: StringFilter<"WorkerProfile"> | string
    availabilityDetails?: StringNullableFilter<"WorkerProfile"> | string | null
    maxDistanceKm?: IntFilter<"WorkerProfile"> | number
    desiredContract?: StringNullableFilter<"WorkerProfile"> | string | null
    desiredSalary?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityRegionsProvinces?: StringFilter<"WorkerProfile"> | string
    availabilityContracts?: StringFilter<"WorkerProfile"> | string
    availabilityRoles?: StringFilter<"WorkerProfile"> | string
    notes?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityNotes?: StringNullableFilter<"WorkerProfile"> | string | null
    availabilityUpdatedAt?: DateTimeNullableFilter<"WorkerProfile"> | Date | string | null
    cvPdfUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    videoPresentationUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    createdAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    favoritedBy?: FavoriteListRelationFilter
    interviewRequests?: InterviewRequestListRelationFilter
    workExperiences?: WorkExperienceListRelationFilter
    proposalResponses?: ProposalResponseListRelationFilter
  }, "id" | "userId">

  export type WorkerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrderInput | SortOrder
    region?: SortOrder
    profession?: SortOrder
    educationLevel?: SortOrder
    educationField?: SortOrderInput | SortOrder
    educationTitles?: SortOrder
    skills?: SortOrder
    certifications?: SortOrderInput | SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    availabilityStatus?: SortOrder
    availabilityDetails?: SortOrderInput | SortOrder
    maxDistanceKm?: SortOrder
    desiredContract?: SortOrderInput | SortOrder
    desiredSalary?: SortOrderInput | SortOrder
    availabilityRegionsProvinces?: SortOrder
    availabilityContracts?: SortOrder
    availabilityRoles?: SortOrder
    notes?: SortOrderInput | SortOrder
    availabilityNotes?: SortOrderInput | SortOrder
    availabilityUpdatedAt?: SortOrderInput | SortOrder
    cvPdfUrl?: SortOrderInput | SortOrder
    videoPresentationUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkerProfileCountOrderByAggregateInput
    _avg?: WorkerProfileAvgOrderByAggregateInput
    _max?: WorkerProfileMaxOrderByAggregateInput
    _min?: WorkerProfileMinOrderByAggregateInput
    _sum?: WorkerProfileSumOrderByAggregateInput
  }

  export type WorkerProfileScalarWhereWithAggregatesInput = {
    AND?: WorkerProfileScalarWhereWithAggregatesInput | WorkerProfileScalarWhereWithAggregatesInput[]
    OR?: WorkerProfileScalarWhereWithAggregatesInput[]
    NOT?: WorkerProfileScalarWhereWithAggregatesInput | WorkerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkerProfile"> | string
    userId?: StringWithAggregatesFilter<"WorkerProfile"> | string
    firstName?: StringWithAggregatesFilter<"WorkerProfile"> | string
    lastName?: StringWithAggregatesFilter<"WorkerProfile"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    city?: StringWithAggregatesFilter<"WorkerProfile"> | string
    province?: StringWithAggregatesFilter<"WorkerProfile"> | string
    sigla?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    region?: StringWithAggregatesFilter<"WorkerProfile"> | string
    profession?: StringWithAggregatesFilter<"WorkerProfile"> | string
    educationLevel?: StringWithAggregatesFilter<"WorkerProfile"> | string
    educationField?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    educationTitles?: StringWithAggregatesFilter<"WorkerProfile"> | string
    skills?: StringWithAggregatesFilter<"WorkerProfile"> | string
    certifications?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    hasLicense?: BoolWithAggregatesFilter<"WorkerProfile"> | boolean
    hasCar?: BoolWithAggregatesFilter<"WorkerProfile"> | boolean
    availabilityStatus?: StringWithAggregatesFilter<"WorkerProfile"> | string
    availabilityDetails?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    maxDistanceKm?: IntWithAggregatesFilter<"WorkerProfile"> | number
    desiredContract?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    desiredSalary?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    availabilityRegionsProvinces?: StringWithAggregatesFilter<"WorkerProfile"> | string
    availabilityContracts?: StringWithAggregatesFilter<"WorkerProfile"> | string
    availabilityRoles?: StringWithAggregatesFilter<"WorkerProfile"> | string
    notes?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    availabilityNotes?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    availabilityUpdatedAt?: DateTimeNullableWithAggregatesFilter<"WorkerProfile"> | Date | string | null
    cvPdfUrl?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    videoPresentationUrl?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkerProfile"> | Date | string
  }

  export type CompanyProfileWhereInput = {
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    id?: StringFilter<"CompanyProfile"> | string
    userId?: StringFilter<"CompanyProfile"> | string
    companyType?: StringFilter<"CompanyProfile"> | string
    companyName?: StringNullableFilter<"CompanyProfile"> | string | null
    address?: StringNullableFilter<"CompanyProfile"> | string | null
    vatNumber?: StringNullableFilter<"CompanyProfile"> | string | null
    firstName?: StringNullableFilter<"CompanyProfile"> | string | null
    lastName?: StringNullableFilter<"CompanyProfile"> | string | null
    residenzaCapCitta?: StringNullableFilter<"CompanyProfile"> | string | null
    fiscalCode?: StringNullableFilter<"CompanyProfile"> | string | null
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    city?: StringNullableFilter<"CompanyProfile"> | string | null
    province?: StringNullableFilter<"CompanyProfile"> | string | null
    sigla?: StringNullableFilter<"CompanyProfile"> | string | null
    contactPerson?: StringNullableFilter<"CompanyProfile"> | string | null
    contactPhone?: StringNullableFilter<"CompanyProfile"> | string | null
    logoUrl?: StringNullableFilter<"CompanyProfile"> | string | null
    idDocumentUrl?: StringNullableFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    interviewRequests?: InterviewRequestListRelationFilter
    jobProposals?: JobProposalListRelationFilter
  }

  export type CompanyProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyType?: SortOrder
    companyName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    residenzaCapCitta?: SortOrderInput | SortOrder
    fiscalCode?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    sigla?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
    interviewRequests?: InterviewRequestOrderByRelationAggregateInput
    jobProposals?: JobProposalOrderByRelationAggregateInput
  }

  export type CompanyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    companyType?: StringFilter<"CompanyProfile"> | string
    companyName?: StringNullableFilter<"CompanyProfile"> | string | null
    address?: StringNullableFilter<"CompanyProfile"> | string | null
    vatNumber?: StringNullableFilter<"CompanyProfile"> | string | null
    firstName?: StringNullableFilter<"CompanyProfile"> | string | null
    lastName?: StringNullableFilter<"CompanyProfile"> | string | null
    residenzaCapCitta?: StringNullableFilter<"CompanyProfile"> | string | null
    fiscalCode?: StringNullableFilter<"CompanyProfile"> | string | null
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    city?: StringNullableFilter<"CompanyProfile"> | string | null
    province?: StringNullableFilter<"CompanyProfile"> | string | null
    sigla?: StringNullableFilter<"CompanyProfile"> | string | null
    contactPerson?: StringNullableFilter<"CompanyProfile"> | string | null
    contactPhone?: StringNullableFilter<"CompanyProfile"> | string | null
    logoUrl?: StringNullableFilter<"CompanyProfile"> | string | null
    idDocumentUrl?: StringNullableFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
    interviewRequests?: InterviewRequestListRelationFilter
    jobProposals?: JobProposalListRelationFilter
  }, "id" | "userId">

  export type CompanyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyType?: SortOrder
    companyName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    residenzaCapCitta?: SortOrderInput | SortOrder
    fiscalCode?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    sigla?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    idDocumentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyProfileCountOrderByAggregateInput
    _max?: CompanyProfileMaxOrderByAggregateInput
    _min?: CompanyProfileMinOrderByAggregateInput
  }

  export type CompanyProfileScalarWhereWithAggregatesInput = {
    AND?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    OR?: CompanyProfileScalarWhereWithAggregatesInput[]
    NOT?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyProfile"> | string
    userId?: StringWithAggregatesFilter<"CompanyProfile"> | string
    companyType?: StringWithAggregatesFilter<"CompanyProfile"> | string
    companyName?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    vatNumber?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    residenzaCapCitta?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    fiscalCode?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    industry?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    province?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    sigla?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    idDocumentUrl?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyProfile"> | Date | string
  }

  export type JobProposalWhereInput = {
    AND?: JobProposalWhereInput | JobProposalWhereInput[]
    OR?: JobProposalWhereInput[]
    NOT?: JobProposalWhereInput | JobProposalWhereInput[]
    id?: StringFilter<"JobProposal"> | string
    companyId?: StringFilter<"JobProposal"> | string
    professions?: StringFilter<"JobProposal"> | string
    locations?: StringFilter<"JobProposal"> | string
    educationTitle?: StringFilter<"JobProposal"> | string
    hasLicense?: BoolFilter<"JobProposal"> | boolean
    hasCar?: BoolFilter<"JobProposal"> | boolean
    minSalary?: StringNullableFilter<"JobProposal"> | string | null
    maxSalary?: StringNullableFilter<"JobProposal"> | string | null
    notes?: StringNullableFilter<"JobProposal"> | string | null
    status?: StringFilter<"JobProposal"> | string
    contractType?: StringNullableFilter<"JobProposal"> | string | null
    createdAt?: DateTimeFilter<"JobProposal"> | Date | string
    updatedAt?: DateTimeFilter<"JobProposal"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    responses?: ProposalResponseListRelationFilter
  }

  export type JobProposalOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    professions?: SortOrder
    locations?: SortOrder
    educationTitle?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxSalary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    contractType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyProfileOrderByWithRelationInput
    responses?: ProposalResponseOrderByRelationAggregateInput
  }

  export type JobProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobProposalWhereInput | JobProposalWhereInput[]
    OR?: JobProposalWhereInput[]
    NOT?: JobProposalWhereInput | JobProposalWhereInput[]
    companyId?: StringFilter<"JobProposal"> | string
    professions?: StringFilter<"JobProposal"> | string
    locations?: StringFilter<"JobProposal"> | string
    educationTitle?: StringFilter<"JobProposal"> | string
    hasLicense?: BoolFilter<"JobProposal"> | boolean
    hasCar?: BoolFilter<"JobProposal"> | boolean
    minSalary?: StringNullableFilter<"JobProposal"> | string | null
    maxSalary?: StringNullableFilter<"JobProposal"> | string | null
    notes?: StringNullableFilter<"JobProposal"> | string | null
    status?: StringFilter<"JobProposal"> | string
    contractType?: StringNullableFilter<"JobProposal"> | string | null
    createdAt?: DateTimeFilter<"JobProposal"> | Date | string
    updatedAt?: DateTimeFilter<"JobProposal"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    responses?: ProposalResponseListRelationFilter
  }, "id">

  export type JobProposalOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    professions?: SortOrder
    locations?: SortOrder
    educationTitle?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    minSalary?: SortOrderInput | SortOrder
    maxSalary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    contractType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobProposalCountOrderByAggregateInput
    _max?: JobProposalMaxOrderByAggregateInput
    _min?: JobProposalMinOrderByAggregateInput
  }

  export type JobProposalScalarWhereWithAggregatesInput = {
    AND?: JobProposalScalarWhereWithAggregatesInput | JobProposalScalarWhereWithAggregatesInput[]
    OR?: JobProposalScalarWhereWithAggregatesInput[]
    NOT?: JobProposalScalarWhereWithAggregatesInput | JobProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobProposal"> | string
    companyId?: StringWithAggregatesFilter<"JobProposal"> | string
    professions?: StringWithAggregatesFilter<"JobProposal"> | string
    locations?: StringWithAggregatesFilter<"JobProposal"> | string
    educationTitle?: StringWithAggregatesFilter<"JobProposal"> | string
    hasLicense?: BoolWithAggregatesFilter<"JobProposal"> | boolean
    hasCar?: BoolWithAggregatesFilter<"JobProposal"> | boolean
    minSalary?: StringNullableWithAggregatesFilter<"JobProposal"> | string | null
    maxSalary?: StringNullableWithAggregatesFilter<"JobProposal"> | string | null
    notes?: StringNullableWithAggregatesFilter<"JobProposal"> | string | null
    status?: StringWithAggregatesFilter<"JobProposal"> | string
    contractType?: StringNullableWithAggregatesFilter<"JobProposal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobProposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobProposal"> | Date | string
  }

  export type ProposalResponseWhereInput = {
    AND?: ProposalResponseWhereInput | ProposalResponseWhereInput[]
    OR?: ProposalResponseWhereInput[]
    NOT?: ProposalResponseWhereInput | ProposalResponseWhereInput[]
    id?: StringFilter<"ProposalResponse"> | string
    proposalId?: StringFilter<"ProposalResponse"> | string
    workerId?: StringFilter<"ProposalResponse"> | string
    status?: StringFilter<"ProposalResponse"> | string
    createdAt?: DateTimeFilter<"ProposalResponse"> | Date | string
    proposal?: XOR<JobProposalRelationFilter, JobProposalWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }

  export type ProposalResponseOrderByWithRelationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    workerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    proposal?: JobProposalOrderByWithRelationInput
    worker?: WorkerProfileOrderByWithRelationInput
  }

  export type ProposalResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proposalId_workerId?: ProposalResponseProposalIdWorkerIdCompoundUniqueInput
    AND?: ProposalResponseWhereInput | ProposalResponseWhereInput[]
    OR?: ProposalResponseWhereInput[]
    NOT?: ProposalResponseWhereInput | ProposalResponseWhereInput[]
    proposalId?: StringFilter<"ProposalResponse"> | string
    workerId?: StringFilter<"ProposalResponse"> | string
    status?: StringFilter<"ProposalResponse"> | string
    createdAt?: DateTimeFilter<"ProposalResponse"> | Date | string
    proposal?: XOR<JobProposalRelationFilter, JobProposalWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }, "id" | "proposalId_workerId">

  export type ProposalResponseOrderByWithAggregationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    workerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ProposalResponseCountOrderByAggregateInput
    _max?: ProposalResponseMaxOrderByAggregateInput
    _min?: ProposalResponseMinOrderByAggregateInput
  }

  export type ProposalResponseScalarWhereWithAggregatesInput = {
    AND?: ProposalResponseScalarWhereWithAggregatesInput | ProposalResponseScalarWhereWithAggregatesInput[]
    OR?: ProposalResponseScalarWhereWithAggregatesInput[]
    NOT?: ProposalResponseScalarWhereWithAggregatesInput | ProposalResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProposalResponse"> | string
    proposalId?: StringWithAggregatesFilter<"ProposalResponse"> | string
    workerId?: StringWithAggregatesFilter<"ProposalResponse"> | string
    status?: StringWithAggregatesFilter<"ProposalResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProposalResponse"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    companyId?: StringFilter<"Favorite"> | string
    workerId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    company?: CompanyProfileOrderByWithRelationInput
    worker?: WorkerProfileOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_workerId?: FavoriteCompanyIdWorkerIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    companyId?: StringFilter<"Favorite"> | string
    workerId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }, "id" | "companyId_workerId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    companyId?: StringWithAggregatesFilter<"Favorite"> | string
    workerId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type InterviewRequestWhereInput = {
    AND?: InterviewRequestWhereInput | InterviewRequestWhereInput[]
    OR?: InterviewRequestWhereInput[]
    NOT?: InterviewRequestWhereInput | InterviewRequestWhereInput[]
    id?: StringFilter<"InterviewRequest"> | string
    companyId?: StringFilter<"InterviewRequest"> | string
    workerId?: StringFilter<"InterviewRequest"> | string
    message?: StringFilter<"InterviewRequest"> | string
    interviewDate?: StringFilter<"InterviewRequest"> | string
    status?: StringFilter<"InterviewRequest"> | string
    createdAt?: DateTimeFilter<"InterviewRequest"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }

  export type InterviewRequestOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    message?: SortOrder
    interviewDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    company?: CompanyProfileOrderByWithRelationInput
    worker?: WorkerProfileOrderByWithRelationInput
  }

  export type InterviewRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewRequestWhereInput | InterviewRequestWhereInput[]
    OR?: InterviewRequestWhereInput[]
    NOT?: InterviewRequestWhereInput | InterviewRequestWhereInput[]
    companyId?: StringFilter<"InterviewRequest"> | string
    workerId?: StringFilter<"InterviewRequest"> | string
    message?: StringFilter<"InterviewRequest"> | string
    interviewDate?: StringFilter<"InterviewRequest"> | string
    status?: StringFilter<"InterviewRequest"> | string
    createdAt?: DateTimeFilter<"InterviewRequest"> | Date | string
    company?: XOR<CompanyProfileRelationFilter, CompanyProfileWhereInput>
    worker?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }, "id">

  export type InterviewRequestOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    message?: SortOrder
    interviewDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InterviewRequestCountOrderByAggregateInput
    _max?: InterviewRequestMaxOrderByAggregateInput
    _min?: InterviewRequestMinOrderByAggregateInput
  }

  export type InterviewRequestScalarWhereWithAggregatesInput = {
    AND?: InterviewRequestScalarWhereWithAggregatesInput | InterviewRequestScalarWhereWithAggregatesInput[]
    OR?: InterviewRequestScalarWhereWithAggregatesInput[]
    NOT?: InterviewRequestScalarWhereWithAggregatesInput | InterviewRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewRequest"> | string
    companyId?: StringWithAggregatesFilter<"InterviewRequest"> | string
    workerId?: StringWithAggregatesFilter<"InterviewRequest"> | string
    message?: StringWithAggregatesFilter<"InterviewRequest"> | string
    interviewDate?: StringWithAggregatesFilter<"InterviewRequest"> | string
    status?: StringWithAggregatesFilter<"InterviewRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InterviewRequest"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    type?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    workerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    role?: StringFilter<"WorkExperience"> | string
    startDate?: StringFilter<"WorkExperience"> | string
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    city?: StringNullableFilter<"WorkExperience"> | string | null
    province?: StringNullableFilter<"WorkExperience"> | string | null
    sigla?: StringNullableFilter<"WorkExperience"> | string | null
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    workerProfile?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    workerProfileId?: SortOrder
    companyName?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    sigla?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workerProfile?: WorkerProfileOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    workerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    role?: StringFilter<"WorkExperience"> | string
    startDate?: StringFilter<"WorkExperience"> | string
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    city?: StringNullableFilter<"WorkExperience"> | string | null
    province?: StringNullableFilter<"WorkExperience"> | string | null
    sigla?: StringNullableFilter<"WorkExperience"> | string | null
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    workerProfile?: XOR<WorkerProfileRelationFilter, WorkerProfileWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    workerProfileId?: SortOrder
    companyName?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    sigla?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkExperience"> | string
    workerProfileId?: StringWithAggregatesFilter<"WorkExperience"> | string
    companyName?: StringWithAggregatesFilter<"WorkExperience"> | string
    role?: StringWithAggregatesFilter<"WorkExperience"> | string
    startDate?: StringWithAggregatesFilter<"WorkExperience"> | string
    endDate?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    description?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    city?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    province?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    sigla?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerProfileCreateInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    favoritedBy?: FavoriteCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteUncheckedCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    favoritedBy?: FavoriteUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUncheckedUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileCreateManyInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileCreateInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
    favorites?: FavoriteCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    favorites?: FavoriteUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileCreateManyInput = {
    id?: string
    userId: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobProposalCreateInput = {
    id?: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutJobProposalsInput
    responses?: ProposalResponseCreateNestedManyWithoutProposalInput
  }

  export type JobProposalUncheckedCreateInput = {
    id?: string
    companyId: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ProposalResponseUncheckedCreateNestedManyWithoutProposalInput
  }

  export type JobProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutJobProposalsNestedInput
    responses?: ProposalResponseUpdateManyWithoutProposalNestedInput
  }

  export type JobProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ProposalResponseUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type JobProposalCreateManyInput = {
    id?: string
    companyId: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    proposal: JobProposalCreateNestedOneWithoutResponsesInput
    worker: WorkerProfileCreateNestedOneWithoutProposalResponsesInput
  }

  export type ProposalResponseUncheckedCreateInput = {
    id?: string
    proposalId: string
    workerId: string
    status: string
    createdAt?: Date | string
  }

  export type ProposalResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: JobProposalUpdateOneRequiredWithoutResponsesNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutProposalResponsesNestedInput
  }

  export type ProposalResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseCreateManyInput = {
    id?: string
    proposalId: string
    workerId: string
    status: string
    createdAt?: Date | string
  }

  export type ProposalResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutFavoritesInput
    worker: WorkerProfileCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    companyId: string
    workerId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutFavoritesNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    companyId: string
    workerId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestCreateInput = {
    id?: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutInterviewRequestsInput
    worker: WorkerProfileCreateNestedOneWithoutInterviewRequestsInput
  }

  export type InterviewRequestUncheckedCreateInput = {
    id?: string
    companyId: string
    workerId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type InterviewRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput
  }

  export type InterviewRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestCreateManyInput = {
    id?: string
    companyId: string
    workerId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type InterviewRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateInput = {
    id?: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
    workerProfile: WorkerProfileCreateNestedOneWithoutWorkExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: string
    workerProfileId: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
  }

  export type WorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneRequiredWithoutWorkExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerProfileId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateManyInput = {
    id?: string
    workerProfileId: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
  }

  export type WorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerProfileId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkerProfileNullableRelationFilter = {
    is?: WorkerProfileWhereInput | null
    isNot?: WorkerProfileWhereInput | null
  }

  export type CompanyProfileNullableRelationFilter = {
    is?: CompanyProfileWhereInput | null
    isNot?: CompanyProfileWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type InterviewRequestListRelationFilter = {
    every?: InterviewRequestWhereInput
    some?: InterviewRequestWhereInput
    none?: InterviewRequestWhereInput
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type ProposalResponseListRelationFilter = {
    every?: ProposalResponseWhereInput
    some?: ProposalResponseWhereInput
    none?: ProposalResponseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    photoUrl?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    region?: SortOrder
    profession?: SortOrder
    educationLevel?: SortOrder
    educationField?: SortOrder
    educationTitles?: SortOrder
    skills?: SortOrder
    certifications?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    availabilityStatus?: SortOrder
    availabilityDetails?: SortOrder
    maxDistanceKm?: SortOrder
    desiredContract?: SortOrder
    desiredSalary?: SortOrder
    availabilityRegionsProvinces?: SortOrder
    availabilityContracts?: SortOrder
    availabilityRoles?: SortOrder
    notes?: SortOrder
    availabilityNotes?: SortOrder
    availabilityUpdatedAt?: SortOrder
    cvPdfUrl?: SortOrder
    videoPresentationUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileAvgOrderByAggregateInput = {
    maxDistanceKm?: SortOrder
  }

  export type WorkerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    photoUrl?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    region?: SortOrder
    profession?: SortOrder
    educationLevel?: SortOrder
    educationField?: SortOrder
    educationTitles?: SortOrder
    skills?: SortOrder
    certifications?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    availabilityStatus?: SortOrder
    availabilityDetails?: SortOrder
    maxDistanceKm?: SortOrder
    desiredContract?: SortOrder
    desiredSalary?: SortOrder
    availabilityRegionsProvinces?: SortOrder
    availabilityContracts?: SortOrder
    availabilityRoles?: SortOrder
    notes?: SortOrder
    availabilityNotes?: SortOrder
    availabilityUpdatedAt?: SortOrder
    cvPdfUrl?: SortOrder
    videoPresentationUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    photoUrl?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    region?: SortOrder
    profession?: SortOrder
    educationLevel?: SortOrder
    educationField?: SortOrder
    educationTitles?: SortOrder
    skills?: SortOrder
    certifications?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    availabilityStatus?: SortOrder
    availabilityDetails?: SortOrder
    maxDistanceKm?: SortOrder
    desiredContract?: SortOrder
    desiredSalary?: SortOrder
    availabilityRegionsProvinces?: SortOrder
    availabilityContracts?: SortOrder
    availabilityRoles?: SortOrder
    notes?: SortOrder
    availabilityNotes?: SortOrder
    availabilityUpdatedAt?: SortOrder
    cvPdfUrl?: SortOrder
    videoPresentationUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileSumOrderByAggregateInput = {
    maxDistanceKm?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JobProposalListRelationFilter = {
    every?: JobProposalWhereInput
    some?: JobProposalWhereInput
    none?: JobProposalWhereInput
  }

  export type JobProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyType?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    vatNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    residenzaCapCitta?: SortOrder
    fiscalCode?: SortOrder
    industry?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    logoUrl?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyType?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    vatNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    residenzaCapCitta?: SortOrder
    fiscalCode?: SortOrder
    industry?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    logoUrl?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyType?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    vatNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    residenzaCapCitta?: SortOrder
    fiscalCode?: SortOrder
    industry?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    contactPerson?: SortOrder
    contactPhone?: SortOrder
    logoUrl?: SortOrder
    idDocumentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileRelationFilter = {
    is?: CompanyProfileWhereInput
    isNot?: CompanyProfileWhereInput
  }

  export type JobProposalCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    professions?: SortOrder
    locations?: SortOrder
    educationTitle?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    contractType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    professions?: SortOrder
    locations?: SortOrder
    educationTitle?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    contractType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobProposalMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    professions?: SortOrder
    locations?: SortOrder
    educationTitle?: SortOrder
    hasLicense?: SortOrder
    hasCar?: SortOrder
    minSalary?: SortOrder
    maxSalary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    contractType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobProposalRelationFilter = {
    is?: JobProposalWhereInput
    isNot?: JobProposalWhereInput
  }

  export type WorkerProfileRelationFilter = {
    is?: WorkerProfileWhereInput
    isNot?: WorkerProfileWhereInput
  }

  export type ProposalResponseProposalIdWorkerIdCompoundUniqueInput = {
    proposalId: string
    workerId: string
  }

  export type ProposalResponseCountOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    workerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    workerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProposalResponseMinOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    workerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteCompanyIdWorkerIdCompoundUniqueInput = {
    companyId: string
    workerId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewRequestCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    message?: SortOrder
    interviewDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    message?: SortOrder
    interviewDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InterviewRequestMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workerId?: SortOrder
    message?: SortOrder
    interviewDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    workerProfileId?: SortOrder
    companyName?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    workerProfileId?: SortOrder
    companyName?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    workerProfileId?: SortOrder
    companyName?: SortOrder
    role?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    city?: SortOrder
    province?: SortOrder
    sigla?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type CompanyProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type WorkerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type CompanyProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    upsert?: WorkerProfileUpsertWithoutUserInput
    disconnect?: WorkerProfileWhereInput | boolean
    delete?: WorkerProfileWhereInput | boolean
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutUserInput, WorkerProfileUpdateWithoutUserInput>, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WorkerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    upsert?: WorkerProfileUpsertWithoutUserInput
    disconnect?: WorkerProfileWhereInput | boolean
    delete?: WorkerProfileWhereInput | boolean
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutUserInput, WorkerProfileUpdateWithoutUserInput>, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkerProfileInput = {
    create?: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutWorkerInput = {
    create?: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput> | FavoriteCreateWithoutWorkerInput[] | FavoriteUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutWorkerInput | FavoriteCreateOrConnectWithoutWorkerInput[]
    createMany?: FavoriteCreateManyWorkerInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InterviewRequestCreateNestedManyWithoutWorkerInput = {
    create?: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput> | InterviewRequestCreateWithoutWorkerInput[] | InterviewRequestUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutWorkerInput | InterviewRequestCreateOrConnectWithoutWorkerInput[]
    createMany?: InterviewRequestCreateManyWorkerInputEnvelope
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
  }

  export type WorkExperienceCreateNestedManyWithoutWorkerProfileInput = {
    create?: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput> | WorkExperienceCreateWithoutWorkerProfileInput[] | WorkExperienceUncheckedCreateWithoutWorkerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutWorkerProfileInput | WorkExperienceCreateOrConnectWithoutWorkerProfileInput[]
    createMany?: WorkExperienceCreateManyWorkerProfileInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type ProposalResponseCreateNestedManyWithoutWorkerInput = {
    create?: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput> | ProposalResponseCreateWithoutWorkerInput[] | ProposalResponseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutWorkerInput | ProposalResponseCreateOrConnectWithoutWorkerInput[]
    createMany?: ProposalResponseCreateManyWorkerInputEnvelope
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput> | FavoriteCreateWithoutWorkerInput[] | FavoriteUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutWorkerInput | FavoriteCreateOrConnectWithoutWorkerInput[]
    createMany?: FavoriteCreateManyWorkerInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput> | InterviewRequestCreateWithoutWorkerInput[] | InterviewRequestUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutWorkerInput | InterviewRequestCreateOrConnectWithoutWorkerInput[]
    createMany?: InterviewRequestCreateManyWorkerInputEnvelope
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput = {
    create?: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput> | WorkExperienceCreateWithoutWorkerProfileInput[] | WorkExperienceUncheckedCreateWithoutWorkerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutWorkerProfileInput | WorkExperienceCreateOrConnectWithoutWorkerProfileInput[]
    createMany?: WorkExperienceCreateManyWorkerProfileInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput> | ProposalResponseCreateWithoutWorkerInput[] | ProposalResponseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutWorkerInput | ProposalResponseCreateOrConnectWithoutWorkerInput[]
    createMany?: ProposalResponseCreateManyWorkerInputEnvelope
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutWorkerProfileNestedInput = {
    create?: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkerProfileInput
    upsert?: UserUpsertWithoutWorkerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkerProfileInput, UserUpdateWithoutWorkerProfileInput>, UserUncheckedUpdateWithoutWorkerProfileInput>
  }

  export type FavoriteUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput> | FavoriteCreateWithoutWorkerInput[] | FavoriteUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutWorkerInput | FavoriteCreateOrConnectWithoutWorkerInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutWorkerInput | FavoriteUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: FavoriteCreateManyWorkerInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutWorkerInput | FavoriteUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutWorkerInput | FavoriteUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InterviewRequestUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput> | InterviewRequestCreateWithoutWorkerInput[] | InterviewRequestUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutWorkerInput | InterviewRequestCreateOrConnectWithoutWorkerInput[]
    upsert?: InterviewRequestUpsertWithWhereUniqueWithoutWorkerInput | InterviewRequestUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: InterviewRequestCreateManyWorkerInputEnvelope
    set?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    disconnect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    delete?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    update?: InterviewRequestUpdateWithWhereUniqueWithoutWorkerInput | InterviewRequestUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: InterviewRequestUpdateManyWithWhereWithoutWorkerInput | InterviewRequestUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
  }

  export type WorkExperienceUpdateManyWithoutWorkerProfileNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput> | WorkExperienceCreateWithoutWorkerProfileInput[] | WorkExperienceUncheckedCreateWithoutWorkerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutWorkerProfileInput | WorkExperienceCreateOrConnectWithoutWorkerProfileInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutWorkerProfileInput | WorkExperienceUpsertWithWhereUniqueWithoutWorkerProfileInput[]
    createMany?: WorkExperienceCreateManyWorkerProfileInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutWorkerProfileInput | WorkExperienceUpdateWithWhereUniqueWithoutWorkerProfileInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutWorkerProfileInput | WorkExperienceUpdateManyWithWhereWithoutWorkerProfileInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type ProposalResponseUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput> | ProposalResponseCreateWithoutWorkerInput[] | ProposalResponseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutWorkerInput | ProposalResponseCreateOrConnectWithoutWorkerInput[]
    upsert?: ProposalResponseUpsertWithWhereUniqueWithoutWorkerInput | ProposalResponseUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: ProposalResponseCreateManyWorkerInputEnvelope
    set?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    disconnect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    delete?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    update?: ProposalResponseUpdateWithWhereUniqueWithoutWorkerInput | ProposalResponseUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: ProposalResponseUpdateManyWithWhereWithoutWorkerInput | ProposalResponseUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput> | FavoriteCreateWithoutWorkerInput[] | FavoriteUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutWorkerInput | FavoriteCreateOrConnectWithoutWorkerInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutWorkerInput | FavoriteUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: FavoriteCreateManyWorkerInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutWorkerInput | FavoriteUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutWorkerInput | FavoriteUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput> | InterviewRequestCreateWithoutWorkerInput[] | InterviewRequestUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutWorkerInput | InterviewRequestCreateOrConnectWithoutWorkerInput[]
    upsert?: InterviewRequestUpsertWithWhereUniqueWithoutWorkerInput | InterviewRequestUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: InterviewRequestCreateManyWorkerInputEnvelope
    set?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    disconnect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    delete?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    update?: InterviewRequestUpdateWithWhereUniqueWithoutWorkerInput | InterviewRequestUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: InterviewRequestUpdateManyWithWhereWithoutWorkerInput | InterviewRequestUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput> | WorkExperienceCreateWithoutWorkerProfileInput[] | WorkExperienceUncheckedCreateWithoutWorkerProfileInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutWorkerProfileInput | WorkExperienceCreateOrConnectWithoutWorkerProfileInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutWorkerProfileInput | WorkExperienceUpsertWithWhereUniqueWithoutWorkerProfileInput[]
    createMany?: WorkExperienceCreateManyWorkerProfileInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutWorkerProfileInput | WorkExperienceUpdateWithWhereUniqueWithoutWorkerProfileInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutWorkerProfileInput | WorkExperienceUpdateManyWithWhereWithoutWorkerProfileInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput> | ProposalResponseCreateWithoutWorkerInput[] | ProposalResponseUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutWorkerInput | ProposalResponseCreateOrConnectWithoutWorkerInput[]
    upsert?: ProposalResponseUpsertWithWhereUniqueWithoutWorkerInput | ProposalResponseUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: ProposalResponseCreateManyWorkerInputEnvelope
    set?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    disconnect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    delete?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    update?: ProposalResponseUpdateWithWhereUniqueWithoutWorkerInput | ProposalResponseUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: ProposalResponseUpdateManyWithWhereWithoutWorkerInput | ProposalResponseUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompanyProfileInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput> | FavoriteCreateWithoutCompanyInput[] | FavoriteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCompanyInput | FavoriteCreateOrConnectWithoutCompanyInput[]
    createMany?: FavoriteCreateManyCompanyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InterviewRequestCreateNestedManyWithoutCompanyInput = {
    create?: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput> | InterviewRequestCreateWithoutCompanyInput[] | InterviewRequestUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutCompanyInput | InterviewRequestCreateOrConnectWithoutCompanyInput[]
    createMany?: InterviewRequestCreateManyCompanyInputEnvelope
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
  }

  export type JobProposalCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput> | JobProposalCreateWithoutCompanyInput[] | JobProposalUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobProposalCreateOrConnectWithoutCompanyInput | JobProposalCreateOrConnectWithoutCompanyInput[]
    createMany?: JobProposalCreateManyCompanyInputEnvelope
    connect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput> | FavoriteCreateWithoutCompanyInput[] | FavoriteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCompanyInput | FavoriteCreateOrConnectWithoutCompanyInput[]
    createMany?: FavoriteCreateManyCompanyInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type InterviewRequestUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput> | InterviewRequestCreateWithoutCompanyInput[] | InterviewRequestUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutCompanyInput | InterviewRequestCreateOrConnectWithoutCompanyInput[]
    createMany?: InterviewRequestCreateManyCompanyInputEnvelope
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
  }

  export type JobProposalUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput> | JobProposalCreateWithoutCompanyInput[] | JobProposalUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobProposalCreateOrConnectWithoutCompanyInput | JobProposalCreateOrConnectWithoutCompanyInput[]
    createMany?: JobProposalCreateManyCompanyInputEnvelope
    connect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyProfileNestedInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    upsert?: UserUpsertWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyProfileInput, UserUpdateWithoutCompanyProfileInput>, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type FavoriteUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput> | FavoriteCreateWithoutCompanyInput[] | FavoriteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCompanyInput | FavoriteCreateOrConnectWithoutCompanyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutCompanyInput | FavoriteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FavoriteCreateManyCompanyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutCompanyInput | FavoriteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutCompanyInput | FavoriteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InterviewRequestUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput> | InterviewRequestCreateWithoutCompanyInput[] | InterviewRequestUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutCompanyInput | InterviewRequestCreateOrConnectWithoutCompanyInput[]
    upsert?: InterviewRequestUpsertWithWhereUniqueWithoutCompanyInput | InterviewRequestUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: InterviewRequestCreateManyCompanyInputEnvelope
    set?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    disconnect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    delete?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    update?: InterviewRequestUpdateWithWhereUniqueWithoutCompanyInput | InterviewRequestUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: InterviewRequestUpdateManyWithWhereWithoutCompanyInput | InterviewRequestUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
  }

  export type JobProposalUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput> | JobProposalCreateWithoutCompanyInput[] | JobProposalUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobProposalCreateOrConnectWithoutCompanyInput | JobProposalCreateOrConnectWithoutCompanyInput[]
    upsert?: JobProposalUpsertWithWhereUniqueWithoutCompanyInput | JobProposalUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobProposalCreateManyCompanyInputEnvelope
    set?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    disconnect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    delete?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    connect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    update?: JobProposalUpdateWithWhereUniqueWithoutCompanyInput | JobProposalUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobProposalUpdateManyWithWhereWithoutCompanyInput | JobProposalUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobProposalScalarWhereInput | JobProposalScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput> | FavoriteCreateWithoutCompanyInput[] | FavoriteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutCompanyInput | FavoriteCreateOrConnectWithoutCompanyInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutCompanyInput | FavoriteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FavoriteCreateManyCompanyInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutCompanyInput | FavoriteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutCompanyInput | FavoriteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type InterviewRequestUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput> | InterviewRequestCreateWithoutCompanyInput[] | InterviewRequestUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: InterviewRequestCreateOrConnectWithoutCompanyInput | InterviewRequestCreateOrConnectWithoutCompanyInput[]
    upsert?: InterviewRequestUpsertWithWhereUniqueWithoutCompanyInput | InterviewRequestUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: InterviewRequestCreateManyCompanyInputEnvelope
    set?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    disconnect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    delete?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    connect?: InterviewRequestWhereUniqueInput | InterviewRequestWhereUniqueInput[]
    update?: InterviewRequestUpdateWithWhereUniqueWithoutCompanyInput | InterviewRequestUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: InterviewRequestUpdateManyWithWhereWithoutCompanyInput | InterviewRequestUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
  }

  export type JobProposalUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput> | JobProposalCreateWithoutCompanyInput[] | JobProposalUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobProposalCreateOrConnectWithoutCompanyInput | JobProposalCreateOrConnectWithoutCompanyInput[]
    upsert?: JobProposalUpsertWithWhereUniqueWithoutCompanyInput | JobProposalUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobProposalCreateManyCompanyInputEnvelope
    set?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    disconnect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    delete?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    connect?: JobProposalWhereUniqueInput | JobProposalWhereUniqueInput[]
    update?: JobProposalUpdateWithWhereUniqueWithoutCompanyInput | JobProposalUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobProposalUpdateManyWithWhereWithoutCompanyInput | JobProposalUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobProposalScalarWhereInput | JobProposalScalarWhereInput[]
  }

  export type CompanyProfileCreateNestedOneWithoutJobProposalsInput = {
    create?: XOR<CompanyProfileCreateWithoutJobProposalsInput, CompanyProfileUncheckedCreateWithoutJobProposalsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutJobProposalsInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type ProposalResponseCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput> | ProposalResponseCreateWithoutProposalInput[] | ProposalResponseUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutProposalInput | ProposalResponseCreateOrConnectWithoutProposalInput[]
    createMany?: ProposalResponseCreateManyProposalInputEnvelope
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
  }

  export type ProposalResponseUncheckedCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput> | ProposalResponseCreateWithoutProposalInput[] | ProposalResponseUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutProposalInput | ProposalResponseCreateOrConnectWithoutProposalInput[]
    createMany?: ProposalResponseCreateManyProposalInputEnvelope
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
  }

  export type CompanyProfileUpdateOneRequiredWithoutJobProposalsNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutJobProposalsInput, CompanyProfileUncheckedCreateWithoutJobProposalsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutJobProposalsInput
    upsert?: CompanyProfileUpsertWithoutJobProposalsInput
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutJobProposalsInput, CompanyProfileUpdateWithoutJobProposalsInput>, CompanyProfileUncheckedUpdateWithoutJobProposalsInput>
  }

  export type ProposalResponseUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput> | ProposalResponseCreateWithoutProposalInput[] | ProposalResponseUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutProposalInput | ProposalResponseCreateOrConnectWithoutProposalInput[]
    upsert?: ProposalResponseUpsertWithWhereUniqueWithoutProposalInput | ProposalResponseUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProposalResponseCreateManyProposalInputEnvelope
    set?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    disconnect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    delete?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    update?: ProposalResponseUpdateWithWhereUniqueWithoutProposalInput | ProposalResponseUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProposalResponseUpdateManyWithWhereWithoutProposalInput | ProposalResponseUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
  }

  export type ProposalResponseUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput> | ProposalResponseCreateWithoutProposalInput[] | ProposalResponseUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalResponseCreateOrConnectWithoutProposalInput | ProposalResponseCreateOrConnectWithoutProposalInput[]
    upsert?: ProposalResponseUpsertWithWhereUniqueWithoutProposalInput | ProposalResponseUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProposalResponseCreateManyProposalInputEnvelope
    set?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    disconnect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    delete?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    connect?: ProposalResponseWhereUniqueInput | ProposalResponseWhereUniqueInput[]
    update?: ProposalResponseUpdateWithWhereUniqueWithoutProposalInput | ProposalResponseUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProposalResponseUpdateManyWithWhereWithoutProposalInput | ProposalResponseUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
  }

  export type JobProposalCreateNestedOneWithoutResponsesInput = {
    create?: XOR<JobProposalCreateWithoutResponsesInput, JobProposalUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: JobProposalCreateOrConnectWithoutResponsesInput
    connect?: JobProposalWhereUniqueInput
  }

  export type WorkerProfileCreateNestedOneWithoutProposalResponsesInput = {
    create?: XOR<WorkerProfileCreateWithoutProposalResponsesInput, WorkerProfileUncheckedCreateWithoutProposalResponsesInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutProposalResponsesInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type JobProposalUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<JobProposalCreateWithoutResponsesInput, JobProposalUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: JobProposalCreateOrConnectWithoutResponsesInput
    upsert?: JobProposalUpsertWithoutResponsesInput
    connect?: JobProposalWhereUniqueInput
    update?: XOR<XOR<JobProposalUpdateToOneWithWhereWithoutResponsesInput, JobProposalUpdateWithoutResponsesInput>, JobProposalUncheckedUpdateWithoutResponsesInput>
  }

  export type WorkerProfileUpdateOneRequiredWithoutProposalResponsesNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutProposalResponsesInput, WorkerProfileUncheckedCreateWithoutProposalResponsesInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutProposalResponsesInput
    upsert?: WorkerProfileUpsertWithoutProposalResponsesInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutProposalResponsesInput, WorkerProfileUpdateWithoutProposalResponsesInput>, WorkerProfileUncheckedUpdateWithoutProposalResponsesInput>
  }

  export type CompanyProfileCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<CompanyProfileCreateWithoutFavoritesInput, CompanyProfileUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutFavoritesInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type WorkerProfileCreateNestedOneWithoutFavoritedByInput = {
    create?: XOR<WorkerProfileCreateWithoutFavoritedByInput, WorkerProfileUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutFavoritedByInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type CompanyProfileUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutFavoritesInput, CompanyProfileUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutFavoritesInput
    upsert?: CompanyProfileUpsertWithoutFavoritesInput
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutFavoritesInput, CompanyProfileUpdateWithoutFavoritesInput>, CompanyProfileUncheckedUpdateWithoutFavoritesInput>
  }

  export type WorkerProfileUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutFavoritedByInput, WorkerProfileUncheckedCreateWithoutFavoritedByInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutFavoritedByInput
    upsert?: WorkerProfileUpsertWithoutFavoritedByInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutFavoritedByInput, WorkerProfileUpdateWithoutFavoritedByInput>, WorkerProfileUncheckedUpdateWithoutFavoritedByInput>
  }

  export type CompanyProfileCreateNestedOneWithoutInterviewRequestsInput = {
    create?: XOR<CompanyProfileCreateWithoutInterviewRequestsInput, CompanyProfileUncheckedCreateWithoutInterviewRequestsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutInterviewRequestsInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type WorkerProfileCreateNestedOneWithoutInterviewRequestsInput = {
    create?: XOR<WorkerProfileCreateWithoutInterviewRequestsInput, WorkerProfileUncheckedCreateWithoutInterviewRequestsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutInterviewRequestsInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type CompanyProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutInterviewRequestsInput, CompanyProfileUncheckedCreateWithoutInterviewRequestsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutInterviewRequestsInput
    upsert?: CompanyProfileUpsertWithoutInterviewRequestsInput
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutInterviewRequestsInput, CompanyProfileUpdateWithoutInterviewRequestsInput>, CompanyProfileUncheckedUpdateWithoutInterviewRequestsInput>
  }

  export type WorkerProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutInterviewRequestsInput, WorkerProfileUncheckedCreateWithoutInterviewRequestsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutInterviewRequestsInput
    upsert?: WorkerProfileUpsertWithoutInterviewRequestsInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutInterviewRequestsInput, WorkerProfileUpdateWithoutInterviewRequestsInput>, WorkerProfileUncheckedUpdateWithoutInterviewRequestsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkerProfileCreateNestedOneWithoutWorkExperiencesInput = {
    create?: XOR<WorkerProfileCreateWithoutWorkExperiencesInput, WorkerProfileUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutWorkExperiencesInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type WorkerProfileUpdateOneRequiredWithoutWorkExperiencesNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutWorkExperiencesInput, WorkerProfileUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutWorkExperiencesInput
    upsert?: WorkerProfileUpsertWithoutWorkExperiencesInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutWorkExperiencesInput, WorkerProfileUpdateWithoutWorkExperiencesInput>, WorkerProfileUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkerProfileCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteUncheckedCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutUserInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
  }

  export type CompanyProfileCreateWithoutUserInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutUserInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type WorkerProfileUpsertWithoutUserInput = {
    update: XOR<WorkerProfileUpdateWithoutUserInput, WorkerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutUserInput, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorkerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUncheckedUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type CompanyProfileUpsertWithoutUserInput = {
    update: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    type?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutWorkerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
  }

  export type FavoriteCreateWithoutWorkerInput = {
    id?: string
    createdAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutWorkerInput = {
    id?: string
    companyId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutWorkerInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput>
  }

  export type FavoriteCreateManyWorkerInputEnvelope = {
    data: FavoriteCreateManyWorkerInput | FavoriteCreateManyWorkerInput[]
  }

  export type InterviewRequestCreateWithoutWorkerInput = {
    id?: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutInterviewRequestsInput
  }

  export type InterviewRequestUncheckedCreateWithoutWorkerInput = {
    id?: string
    companyId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type InterviewRequestCreateOrConnectWithoutWorkerInput = {
    where: InterviewRequestWhereUniqueInput
    create: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput>
  }

  export type InterviewRequestCreateManyWorkerInputEnvelope = {
    data: InterviewRequestCreateManyWorkerInput | InterviewRequestCreateManyWorkerInput[]
  }

  export type WorkExperienceCreateWithoutWorkerProfileInput = {
    id?: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
  }

  export type WorkExperienceUncheckedCreateWithoutWorkerProfileInput = {
    id?: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
  }

  export type WorkExperienceCreateOrConnectWithoutWorkerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput>
  }

  export type WorkExperienceCreateManyWorkerProfileInputEnvelope = {
    data: WorkExperienceCreateManyWorkerProfileInput | WorkExperienceCreateManyWorkerProfileInput[]
  }

  export type ProposalResponseCreateWithoutWorkerInput = {
    id?: string
    status: string
    createdAt?: Date | string
    proposal: JobProposalCreateNestedOneWithoutResponsesInput
  }

  export type ProposalResponseUncheckedCreateWithoutWorkerInput = {
    id?: string
    proposalId: string
    status: string
    createdAt?: Date | string
  }

  export type ProposalResponseCreateOrConnectWithoutWorkerInput = {
    where: ProposalResponseWhereUniqueInput
    create: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput>
  }

  export type ProposalResponseCreateManyWorkerInputEnvelope = {
    data: ProposalResponseCreateManyWorkerInput | ProposalResponseCreateManyWorkerInput[]
  }

  export type UserUpsertWithoutWorkerProfileInput = {
    update: XOR<UserUpdateWithoutWorkerProfileInput, UserUncheckedUpdateWithoutWorkerProfileInput>
    create: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkerProfileInput, UserUncheckedUpdateWithoutWorkerProfileInput>
  }

  export type UserUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutWorkerInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutWorkerInput, FavoriteUncheckedUpdateWithoutWorkerInput>
    create: XOR<FavoriteCreateWithoutWorkerInput, FavoriteUncheckedCreateWithoutWorkerInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutWorkerInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutWorkerInput, FavoriteUncheckedUpdateWithoutWorkerInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutWorkerInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutWorkerInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    companyId?: StringFilter<"Favorite"> | string
    workerId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type InterviewRequestUpsertWithWhereUniqueWithoutWorkerInput = {
    where: InterviewRequestWhereUniqueInput
    update: XOR<InterviewRequestUpdateWithoutWorkerInput, InterviewRequestUncheckedUpdateWithoutWorkerInput>
    create: XOR<InterviewRequestCreateWithoutWorkerInput, InterviewRequestUncheckedCreateWithoutWorkerInput>
  }

  export type InterviewRequestUpdateWithWhereUniqueWithoutWorkerInput = {
    where: InterviewRequestWhereUniqueInput
    data: XOR<InterviewRequestUpdateWithoutWorkerInput, InterviewRequestUncheckedUpdateWithoutWorkerInput>
  }

  export type InterviewRequestUpdateManyWithWhereWithoutWorkerInput = {
    where: InterviewRequestScalarWhereInput
    data: XOR<InterviewRequestUpdateManyMutationInput, InterviewRequestUncheckedUpdateManyWithoutWorkerInput>
  }

  export type InterviewRequestScalarWhereInput = {
    AND?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
    OR?: InterviewRequestScalarWhereInput[]
    NOT?: InterviewRequestScalarWhereInput | InterviewRequestScalarWhereInput[]
    id?: StringFilter<"InterviewRequest"> | string
    companyId?: StringFilter<"InterviewRequest"> | string
    workerId?: StringFilter<"InterviewRequest"> | string
    message?: StringFilter<"InterviewRequest"> | string
    interviewDate?: StringFilter<"InterviewRequest"> | string
    status?: StringFilter<"InterviewRequest"> | string
    createdAt?: DateTimeFilter<"InterviewRequest"> | Date | string
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutWorkerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutWorkerProfileInput, WorkExperienceUncheckedUpdateWithoutWorkerProfileInput>
    create: XOR<WorkExperienceCreateWithoutWorkerProfileInput, WorkExperienceUncheckedCreateWithoutWorkerProfileInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutWorkerProfileInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutWorkerProfileInput, WorkExperienceUncheckedUpdateWithoutWorkerProfileInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutWorkerProfileInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutWorkerProfileInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    workerProfileId?: StringFilter<"WorkExperience"> | string
    companyName?: StringFilter<"WorkExperience"> | string
    role?: StringFilter<"WorkExperience"> | string
    startDate?: StringFilter<"WorkExperience"> | string
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    city?: StringNullableFilter<"WorkExperience"> | string | null
    province?: StringNullableFilter<"WorkExperience"> | string | null
    sigla?: StringNullableFilter<"WorkExperience"> | string | null
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
  }

  export type ProposalResponseUpsertWithWhereUniqueWithoutWorkerInput = {
    where: ProposalResponseWhereUniqueInput
    update: XOR<ProposalResponseUpdateWithoutWorkerInput, ProposalResponseUncheckedUpdateWithoutWorkerInput>
    create: XOR<ProposalResponseCreateWithoutWorkerInput, ProposalResponseUncheckedCreateWithoutWorkerInput>
  }

  export type ProposalResponseUpdateWithWhereUniqueWithoutWorkerInput = {
    where: ProposalResponseWhereUniqueInput
    data: XOR<ProposalResponseUpdateWithoutWorkerInput, ProposalResponseUncheckedUpdateWithoutWorkerInput>
  }

  export type ProposalResponseUpdateManyWithWhereWithoutWorkerInput = {
    where: ProposalResponseScalarWhereInput
    data: XOR<ProposalResponseUpdateManyMutationInput, ProposalResponseUncheckedUpdateManyWithoutWorkerInput>
  }

  export type ProposalResponseScalarWhereInput = {
    AND?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
    OR?: ProposalResponseScalarWhereInput[]
    NOT?: ProposalResponseScalarWhereInput | ProposalResponseScalarWhereInput[]
    id?: StringFilter<"ProposalResponse"> | string
    proposalId?: StringFilter<"ProposalResponse"> | string
    workerId?: StringFilter<"ProposalResponse"> | string
    status?: StringFilter<"ProposalResponse"> | string
    createdAt?: DateTimeFilter<"ProposalResponse"> | Date | string
  }

  export type UserCreateWithoutCompanyProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
  }

  export type FavoriteCreateWithoutCompanyInput = {
    id?: string
    createdAt?: Date | string
    worker: WorkerProfileCreateNestedOneWithoutFavoritedByInput
  }

  export type FavoriteUncheckedCreateWithoutCompanyInput = {
    id?: string
    workerId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutCompanyInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput>
  }

  export type FavoriteCreateManyCompanyInputEnvelope = {
    data: FavoriteCreateManyCompanyInput | FavoriteCreateManyCompanyInput[]
  }

  export type InterviewRequestCreateWithoutCompanyInput = {
    id?: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
    worker: WorkerProfileCreateNestedOneWithoutInterviewRequestsInput
  }

  export type InterviewRequestUncheckedCreateWithoutCompanyInput = {
    id?: string
    workerId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type InterviewRequestCreateOrConnectWithoutCompanyInput = {
    where: InterviewRequestWhereUniqueInput
    create: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput>
  }

  export type InterviewRequestCreateManyCompanyInputEnvelope = {
    data: InterviewRequestCreateManyCompanyInput | InterviewRequestCreateManyCompanyInput[]
  }

  export type JobProposalCreateWithoutCompanyInput = {
    id?: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ProposalResponseCreateNestedManyWithoutProposalInput
  }

  export type JobProposalUncheckedCreateWithoutCompanyInput = {
    id?: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: ProposalResponseUncheckedCreateNestedManyWithoutProposalInput
  }

  export type JobProposalCreateOrConnectWithoutCompanyInput = {
    where: JobProposalWhereUniqueInput
    create: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput>
  }

  export type JobProposalCreateManyCompanyInputEnvelope = {
    data: JobProposalCreateManyCompanyInput | JobProposalCreateManyCompanyInput[]
  }

  export type UserUpsertWithoutCompanyProfileInput = {
    update: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type UserUpdateWithoutCompanyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutCompanyInput, FavoriteUncheckedUpdateWithoutCompanyInput>
    create: XOR<FavoriteCreateWithoutCompanyInput, FavoriteUncheckedCreateWithoutCompanyInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutCompanyInput, FavoriteUncheckedUpdateWithoutCompanyInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutCompanyInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutCompanyInput>
  }

  export type InterviewRequestUpsertWithWhereUniqueWithoutCompanyInput = {
    where: InterviewRequestWhereUniqueInput
    update: XOR<InterviewRequestUpdateWithoutCompanyInput, InterviewRequestUncheckedUpdateWithoutCompanyInput>
    create: XOR<InterviewRequestCreateWithoutCompanyInput, InterviewRequestUncheckedCreateWithoutCompanyInput>
  }

  export type InterviewRequestUpdateWithWhereUniqueWithoutCompanyInput = {
    where: InterviewRequestWhereUniqueInput
    data: XOR<InterviewRequestUpdateWithoutCompanyInput, InterviewRequestUncheckedUpdateWithoutCompanyInput>
  }

  export type InterviewRequestUpdateManyWithWhereWithoutCompanyInput = {
    where: InterviewRequestScalarWhereInput
    data: XOR<InterviewRequestUpdateManyMutationInput, InterviewRequestUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobProposalUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobProposalWhereUniqueInput
    update: XOR<JobProposalUpdateWithoutCompanyInput, JobProposalUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobProposalCreateWithoutCompanyInput, JobProposalUncheckedCreateWithoutCompanyInput>
  }

  export type JobProposalUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobProposalWhereUniqueInput
    data: XOR<JobProposalUpdateWithoutCompanyInput, JobProposalUncheckedUpdateWithoutCompanyInput>
  }

  export type JobProposalUpdateManyWithWhereWithoutCompanyInput = {
    where: JobProposalScalarWhereInput
    data: XOR<JobProposalUpdateManyMutationInput, JobProposalUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobProposalScalarWhereInput = {
    AND?: JobProposalScalarWhereInput | JobProposalScalarWhereInput[]
    OR?: JobProposalScalarWhereInput[]
    NOT?: JobProposalScalarWhereInput | JobProposalScalarWhereInput[]
    id?: StringFilter<"JobProposal"> | string
    companyId?: StringFilter<"JobProposal"> | string
    professions?: StringFilter<"JobProposal"> | string
    locations?: StringFilter<"JobProposal"> | string
    educationTitle?: StringFilter<"JobProposal"> | string
    hasLicense?: BoolFilter<"JobProposal"> | boolean
    hasCar?: BoolFilter<"JobProposal"> | boolean
    minSalary?: StringNullableFilter<"JobProposal"> | string | null
    maxSalary?: StringNullableFilter<"JobProposal"> | string | null
    notes?: StringNullableFilter<"JobProposal"> | string | null
    status?: StringFilter<"JobProposal"> | string
    contractType?: StringNullableFilter<"JobProposal"> | string | null
    createdAt?: DateTimeFilter<"JobProposal"> | Date | string
    updatedAt?: DateTimeFilter<"JobProposal"> | Date | string
  }

  export type CompanyProfileCreateWithoutJobProposalsInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
    favorites?: FavoriteCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutJobProposalsInput = {
    id?: string
    userId: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCompanyInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutJobProposalsInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutJobProposalsInput, CompanyProfileUncheckedCreateWithoutJobProposalsInput>
  }

  export type ProposalResponseCreateWithoutProposalInput = {
    id?: string
    status: string
    createdAt?: Date | string
    worker: WorkerProfileCreateNestedOneWithoutProposalResponsesInput
  }

  export type ProposalResponseUncheckedCreateWithoutProposalInput = {
    id?: string
    workerId: string
    status: string
    createdAt?: Date | string
  }

  export type ProposalResponseCreateOrConnectWithoutProposalInput = {
    where: ProposalResponseWhereUniqueInput
    create: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput>
  }

  export type ProposalResponseCreateManyProposalInputEnvelope = {
    data: ProposalResponseCreateManyProposalInput | ProposalResponseCreateManyProposalInput[]
  }

  export type CompanyProfileUpsertWithoutJobProposalsInput = {
    update: XOR<CompanyProfileUpdateWithoutJobProposalsInput, CompanyProfileUncheckedUpdateWithoutJobProposalsInput>
    create: XOR<CompanyProfileCreateWithoutJobProposalsInput, CompanyProfileUncheckedCreateWithoutJobProposalsInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutJobProposalsInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutJobProposalsInput, CompanyProfileUncheckedUpdateWithoutJobProposalsInput>
  }

  export type CompanyProfileUpdateWithoutJobProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    favorites?: FavoriteUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutJobProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutCompanyNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ProposalResponseUpsertWithWhereUniqueWithoutProposalInput = {
    where: ProposalResponseWhereUniqueInput
    update: XOR<ProposalResponseUpdateWithoutProposalInput, ProposalResponseUncheckedUpdateWithoutProposalInput>
    create: XOR<ProposalResponseCreateWithoutProposalInput, ProposalResponseUncheckedCreateWithoutProposalInput>
  }

  export type ProposalResponseUpdateWithWhereUniqueWithoutProposalInput = {
    where: ProposalResponseWhereUniqueInput
    data: XOR<ProposalResponseUpdateWithoutProposalInput, ProposalResponseUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalResponseUpdateManyWithWhereWithoutProposalInput = {
    where: ProposalResponseScalarWhereInput
    data: XOR<ProposalResponseUpdateManyMutationInput, ProposalResponseUncheckedUpdateManyWithoutProposalInput>
  }

  export type JobProposalCreateWithoutResponsesInput = {
    id?: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutJobProposalsInput
  }

  export type JobProposalUncheckedCreateWithoutResponsesInput = {
    id?: string
    companyId: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobProposalCreateOrConnectWithoutResponsesInput = {
    where: JobProposalWhereUniqueInput
    create: XOR<JobProposalCreateWithoutResponsesInput, JobProposalUncheckedCreateWithoutResponsesInput>
  }

  export type WorkerProfileCreateWithoutProposalResponsesInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    favoritedBy?: FavoriteCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutWorkerProfileInput
  }

  export type WorkerProfileUncheckedCreateWithoutProposalResponsesInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteUncheckedCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput
  }

  export type WorkerProfileCreateOrConnectWithoutProposalResponsesInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutProposalResponsesInput, WorkerProfileUncheckedCreateWithoutProposalResponsesInput>
  }

  export type JobProposalUpsertWithoutResponsesInput = {
    update: XOR<JobProposalUpdateWithoutResponsesInput, JobProposalUncheckedUpdateWithoutResponsesInput>
    create: XOR<JobProposalCreateWithoutResponsesInput, JobProposalUncheckedCreateWithoutResponsesInput>
    where?: JobProposalWhereInput
  }

  export type JobProposalUpdateToOneWithWhereWithoutResponsesInput = {
    where?: JobProposalWhereInput
    data: XOR<JobProposalUpdateWithoutResponsesInput, JobProposalUncheckedUpdateWithoutResponsesInput>
  }

  export type JobProposalUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutJobProposalsNestedInput
  }

  export type JobProposalUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerProfileUpsertWithoutProposalResponsesInput = {
    update: XOR<WorkerProfileUpdateWithoutProposalResponsesInput, WorkerProfileUncheckedUpdateWithoutProposalResponsesInput>
    create: XOR<WorkerProfileCreateWithoutProposalResponsesInput, WorkerProfileUncheckedCreateWithoutProposalResponsesInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutProposalResponsesInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutProposalResponsesInput, WorkerProfileUncheckedUpdateWithoutProposalResponsesInput>
  }

  export type WorkerProfileUpdateWithoutProposalResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    favoritedBy?: FavoriteUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutWorkerProfileNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutProposalResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUncheckedUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput
  }

  export type CompanyProfileCreateWithoutFavoritesInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutFavoritesInput = {
    id?: string
    userId: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutFavoritesInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutFavoritesInput, CompanyProfileUncheckedCreateWithoutFavoritesInput>
  }

  export type WorkerProfileCreateWithoutFavoritedByInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutFavoritedByInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutFavoritedByInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutFavoritedByInput, WorkerProfileUncheckedCreateWithoutFavoritedByInput>
  }

  export type CompanyProfileUpsertWithoutFavoritesInput = {
    update: XOR<CompanyProfileUpdateWithoutFavoritesInput, CompanyProfileUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CompanyProfileCreateWithoutFavoritesInput, CompanyProfileUncheckedCreateWithoutFavoritesInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutFavoritesInput, CompanyProfileUncheckedUpdateWithoutFavoritesInput>
  }

  export type CompanyProfileUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorkerProfileUpsertWithoutFavoritedByInput = {
    update: XOR<WorkerProfileUpdateWithoutFavoritedByInput, WorkerProfileUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<WorkerProfileCreateWithoutFavoritedByInput, WorkerProfileUncheckedCreateWithoutFavoritedByInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutFavoritedByInput, WorkerProfileUncheckedUpdateWithoutFavoritedByInput>
  }

  export type WorkerProfileUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutFavoritedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type CompanyProfileCreateWithoutInterviewRequestsInput = {
    id?: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
    favorites?: FavoriteCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutInterviewRequestsInput = {
    id?: string
    userId: string
    companyType?: string
    companyName?: string | null
    address?: string | null
    vatNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    residenzaCapCitta?: string | null
    fiscalCode?: string | null
    industry?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    contactPerson?: string | null
    contactPhone?: string | null
    logoUrl?: string | null
    idDocumentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutCompanyInput
    jobProposals?: JobProposalUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutInterviewRequestsInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutInterviewRequestsInput, CompanyProfileUncheckedCreateWithoutInterviewRequestsInput>
  }

  export type WorkerProfileCreateWithoutInterviewRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    favoritedBy?: FavoriteCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutInterviewRequestsInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteUncheckedCreateNestedManyWithoutWorkerInput
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutWorkerProfileInput
    proposalResponses?: ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutInterviewRequestsInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutInterviewRequestsInput, WorkerProfileUncheckedCreateWithoutInterviewRequestsInput>
  }

  export type CompanyProfileUpsertWithoutInterviewRequestsInput = {
    update: XOR<CompanyProfileUpdateWithoutInterviewRequestsInput, CompanyProfileUncheckedUpdateWithoutInterviewRequestsInput>
    create: XOR<CompanyProfileCreateWithoutInterviewRequestsInput, CompanyProfileUncheckedCreateWithoutInterviewRequestsInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutInterviewRequestsInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutInterviewRequestsInput, CompanyProfileUncheckedUpdateWithoutInterviewRequestsInput>
  }

  export type CompanyProfileUpdateWithoutInterviewRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    favorites?: FavoriteUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutInterviewRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyType?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    residenzaCapCitta?: NullableStringFieldUpdateOperationsInput | string | null
    fiscalCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    idDocumentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutCompanyNestedInput
    jobProposals?: JobProposalUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type WorkerProfileUpsertWithoutInterviewRequestsInput = {
    update: XOR<WorkerProfileUpdateWithoutInterviewRequestsInput, WorkerProfileUncheckedUpdateWithoutInterviewRequestsInput>
    create: XOR<WorkerProfileCreateWithoutInterviewRequestsInput, WorkerProfileUncheckedCreateWithoutInterviewRequestsInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutInterviewRequestsInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutInterviewRequestsInput, WorkerProfileUncheckedUpdateWithoutInterviewRequestsInput>
  }

  export type WorkerProfileUpdateWithoutInterviewRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    favoritedBy?: FavoriteUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutInterviewRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUncheckedUpdateManyWithoutWorkerNestedInput
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutWorkerProfileNestedInput
    proposalResponses?: ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    role: string
    emailVerified?: boolean
    createdAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WorkerProfileCreateWithoutWorkExperiencesInput = {
    id?: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    favoritedBy?: FavoriteCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestCreateNestedManyWithoutWorkerInput
    proposalResponses?: ProposalResponseCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutWorkExperiencesInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    photoUrl?: string | null
    phone?: string | null
    city: string
    province: string
    sigla?: string | null
    region: string
    profession: string
    educationLevel?: string
    educationField?: string | null
    educationTitles?: string
    skills: string
    certifications?: string | null
    hasLicense?: boolean
    hasCar?: boolean
    availabilityStatus: string
    availabilityDetails?: string | null
    maxDistanceKm?: number
    desiredContract?: string | null
    desiredSalary?: string | null
    availabilityRegionsProvinces?: string
    availabilityContracts?: string
    availabilityRoles?: string
    notes?: string | null
    availabilityNotes?: string | null
    availabilityUpdatedAt?: Date | string | null
    cvPdfUrl?: string | null
    videoPresentationUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritedBy?: FavoriteUncheckedCreateNestedManyWithoutWorkerInput
    interviewRequests?: InterviewRequestUncheckedCreateNestedManyWithoutWorkerInput
    proposalResponses?: ProposalResponseUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutWorkExperiencesInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutWorkExperiencesInput, WorkerProfileUncheckedCreateWithoutWorkExperiencesInput>
  }

  export type WorkerProfileUpsertWithoutWorkExperiencesInput = {
    update: XOR<WorkerProfileUpdateWithoutWorkExperiencesInput, WorkerProfileUncheckedUpdateWithoutWorkExperiencesInput>
    create: XOR<WorkerProfileCreateWithoutWorkExperiencesInput, WorkerProfileUncheckedCreateWithoutWorkExperiencesInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutWorkExperiencesInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutWorkExperiencesInput, WorkerProfileUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type WorkerProfileUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    favoritedBy?: FavoriteUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUpdateManyWithoutWorkerNestedInput
    proposalResponses?: ProposalResponseUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    educationLevel?: StringFieldUpdateOperationsInput | string
    educationField?: NullableStringFieldUpdateOperationsInput | string | null
    educationTitles?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    certifications?: NullableStringFieldUpdateOperationsInput | string | null
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    availabilityStatus?: StringFieldUpdateOperationsInput | string
    availabilityDetails?: NullableStringFieldUpdateOperationsInput | string | null
    maxDistanceKm?: IntFieldUpdateOperationsInput | number
    desiredContract?: NullableStringFieldUpdateOperationsInput | string | null
    desiredSalary?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityRegionsProvinces?: StringFieldUpdateOperationsInput | string
    availabilityContracts?: StringFieldUpdateOperationsInput | string
    availabilityRoles?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityNotes?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cvPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoPresentationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritedBy?: FavoriteUncheckedUpdateManyWithoutWorkerNestedInput
    interviewRequests?: InterviewRequestUncheckedUpdateManyWithoutWorkerNestedInput
    proposalResponses?: ProposalResponseUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    type: string
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyWorkerInput = {
    id?: string
    companyId: string
    createdAt?: Date | string
  }

  export type InterviewRequestCreateManyWorkerInput = {
    id?: string
    companyId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type WorkExperienceCreateManyWorkerProfileInput = {
    id?: string
    companyName: string
    role: string
    startDate: string
    endDate?: string | null
    description?: string | null
    city?: string | null
    province?: string | null
    sigla?: string | null
    createdAt?: Date | string
  }

  export type ProposalResponseCreateManyWorkerInput = {
    id?: string
    proposalId: string
    status: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput
  }

  export type InterviewRequestUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    sigla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: JobProposalUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type ProposalResponseUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyCompanyInput = {
    id?: string
    workerId: string
    createdAt?: Date | string
  }

  export type InterviewRequestCreateManyCompanyInput = {
    id?: string
    workerId: string
    message: string
    interviewDate: string
    status: string
    createdAt?: Date | string
  }

  export type JobProposalCreateManyCompanyInput = {
    id?: string
    professions: string
    locations: string
    educationTitle: string
    hasLicense?: boolean
    hasCar?: boolean
    minSalary?: string | null
    maxSalary?: string | null
    notes?: string | null
    status?: string
    contractType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerProfileUpdateOneRequiredWithoutFavoritedByNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerProfileUpdateOneRequiredWithoutInterviewRequestsNestedInput
  }

  export type InterviewRequestUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewRequestUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    interviewDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobProposalUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ProposalResponseUpdateManyWithoutProposalNestedInput
  }

  export type JobProposalUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: ProposalResponseUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type JobProposalUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professions?: StringFieldUpdateOperationsInput | string
    locations?: StringFieldUpdateOperationsInput | string
    educationTitle?: StringFieldUpdateOperationsInput | string
    hasLicense?: BoolFieldUpdateOperationsInput | boolean
    hasCar?: BoolFieldUpdateOperationsInput | boolean
    minSalary?: NullableStringFieldUpdateOperationsInput | string | null
    maxSalary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseCreateManyProposalInput = {
    id?: string
    workerId: string
    status: string
    createdAt?: Date | string
  }

  export type ProposalResponseUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerProfileUpdateOneRequiredWithoutProposalResponsesNestedInput
  }

  export type ProposalResponseUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalResponseUncheckedUpdateManyWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkerProfileCountOutputTypeDefaultArgs instead
     */
    export type WorkerProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkerProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyProfileCountOutputTypeDefaultArgs instead
     */
    export type CompanyProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobProposalCountOutputTypeDefaultArgs instead
     */
    export type JobProposalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobProposalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkerProfileDefaultArgs instead
     */
    export type WorkerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkerProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyProfileDefaultArgs instead
     */
    export type CompanyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobProposalDefaultArgs instead
     */
    export type JobProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobProposalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProposalResponseDefaultArgs instead
     */
    export type ProposalResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProposalResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterviewRequestDefaultArgs instead
     */
    export type InterviewRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterviewRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkExperienceDefaultArgs instead
     */
    export type WorkExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkExperienceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}