interface StringToStringArrayMap {
  [key: string]: string[]
}
class Link {
  href: string
  text: string
  constructor(text: string, href: string) {
    this.text = text
    this.href = href
  }
}
export class VisaInformation {
  private _basicRequirements: string[] = []
  private _groupedRequirements: StringToStringArrayMap = {}
  private _links: Link[] = []
  private _additionalInformation: string[] = []

  withLink(text: string, href: string) {
    this._links.push(new Link(text, href))
    return this
  }

  withBasicInformation(text: string) {
    this._basicRequirements.push(text)
    return this
  }

  withExpandableInformation(key: string, values: string[]) {
    if (key in this._groupedRequirements) {
      this._groupedRequirements[key].push(...values)
    } else {
      this._groupedRequirements[key] = values
    }
    return this
  }

  get basicRequirements() {
    return this._basicRequirements
  }

  get groupedRequirements() {
    return this._groupedRequirements
  }

  get links() {
    return this._links
  }

  withAdditionalInformation(text: string) {
    this._additionalInformation.push(text)
    return this
  }

  get additionalInformation() {
    return this._additionalInformation
  }
}
