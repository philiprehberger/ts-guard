export type Guard<T> = (value: unknown) => value is T;

export type GuardType<G> = G extends Guard<infer T> ? T : never;
