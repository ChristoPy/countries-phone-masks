declare interface Country {
  /** 
   * The name of the country. 
   * 
   * @example "Brazil" 
   */
  name: string;

  /** 
   * The Internation call prefix [(IDD code)](https://en.wikipedia.org/wiki/International_direct_dialing#International_call_prefix) of the country. 
   * 
   * @example "+55" 
   */
  code: string;

  /** 
   * The ISO [3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country.
   * 
   * @example "BR" 
   */
  iso: string;

  /** 
   * A URL to a SVG file of the country's flag.
   * 
   * @example "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
   */
  flag: string;

  /**
   * Default mask for the country's phone numbers.
   * 
   * @example "(##)####-####"
   */
  mask: string;

  /**
   * An array of masks for the country's phone numbers.
   * 
   * @example ["(##)####-####", "(##)#####-####"]
   */
  masks: string[];
}

declare const countries: Country[];

export default countries;
