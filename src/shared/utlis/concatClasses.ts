/**
 * Concatenates several CSS classes into one string
 * @param classNames list of classNames that need to be combined
 * @returns single string that can be passed to className prop
 */
export function concatClasses(...classNames: (string | null | undefined | false)[]): string {
  return classNames.filter((className?: string | null | false) => !!className).join(' ');
}
export { concatClasses as cx };

