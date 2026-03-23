const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getImagePath(path: string) {
  return `${basePath}${path}`;
}
