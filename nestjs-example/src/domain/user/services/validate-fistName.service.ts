export function ValidateFistNameService(name: string) {
  if (!name.trim()) {
    return false;
  }

  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}
