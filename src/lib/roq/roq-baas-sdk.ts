/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, supplier, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface SupplierSDK {
  create: <T extends Prisma.supplierCreateArgs, R extends CheckSelect<T, supplier, Prisma.supplierGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.supplierCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.supplierCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.supplierUpdateArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.supplierUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.supplierUpsertArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.supplierDeleteArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.supplierDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.supplierFindManyArgs, R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.supplierCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.supplierCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.supplierFindManyArgs,
    R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.supplierFindFirstArgs, R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.supplierFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public supplier!: SupplierSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.supplier = {
      create: async function createSupplier<
        T extends Prisma.supplierCreateArgs,
        R extends CheckSelect<T, supplier, Prisma.supplierGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManySupplier<
        T extends Prisma.supplierCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supplier/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateSupplier<
        T extends Prisma.supplierUpdateArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManySupplier<
        T extends Prisma.supplierUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supplier/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertSupplier<
        T extends Prisma.supplierUpsertArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteSupplier<
        T extends Prisma.supplierDeleteArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManySupplier<
        T extends Prisma.supplierDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManySupplier<
        T extends Prisma.supplierFindManyArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countSupplier<T extends Prisma.supplierCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.supplierCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/supplier/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountSupplier<
        T extends Prisma.supplierFindManyArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.supplier.findMany(args, options),
          ctx.supplier.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstSupplier<
        T extends Prisma.supplierFindFirstArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.supplierFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
