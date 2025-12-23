export function withBase(path: string) {
    // path は "blog/" みたいに先頭スラッシュ無し推奨
    return new URL(path, import.meta.env.BASE_URL).pathname;
}
