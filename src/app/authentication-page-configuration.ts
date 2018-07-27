
export class AuthenticationPageConfiguration {

  static VISIT1_DATA = new AuthenticationPageConfiguration(
    1,
    false
  );

  static VISIT2_DATA = new AuthenticationPageConfiguration(
    2,
    true

  );


  constructor(public visite ?: number, public slideChecked?: boolean ) {
  }






}
