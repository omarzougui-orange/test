export class InformationPageConfiguration  {


  static CONFIRMATION_DATA = new InformationPageConfiguration(
    'Le virement a bien été envoyé sur votre compte bancaire',
    'Votre RIB n’est plus enregistré sur Orange Bank. Vous devrez le saisir à nouveau la prochaine fois.',
    '1',
    true,
    undefined
  );



  static ERROR_DATA = new InformationPageConfiguration(
    'Oups... Ce virement SMS n\'est plus disponible.',
    'Votre RIB n’est plus enregistré sur Orange Bank. Vous devrez le saisir à nouveau la prochaine fois.',
    '2',
    true,
    `Rappelez-vous, vous pouvez supprimer le RIB que vous avez enregistré à tout moment !
    Pour plus d’informations, consultez les conditions générales d’utilisation pour ce service.`
  );









  constructor(public title ?: string , public subTitle?: string , public img?: string , public  btn?: boolean, public paragraphe?: string) {
  }





}
