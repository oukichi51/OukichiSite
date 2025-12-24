export function withBase(path: string) {
    // path は "blog/" みたいに先頭スラッシュ無し推奨
    const base = import.meta.env.BASE_URL;
    const basePath = base.endsWith('/') ? base.slice(0, -1) : base;
    const pathWithSlash = path.startsWith('/') ? path : '/' + path;
    return basePath + pathWithSlash;
}
