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

export enum VisaType {
  IMMIGRANT,
  NON_IMMIGRANT,
  DUAL_INTENT,
}

export class VisaInformationData {
  private _visaType!: VisaType
  private _basicRequirements: string[] = []
  private _basicInformation: string[] = []
  private _groupedRequirements: StringToStringArrayMap = {}
  private _links: Link[] = []

  withVisaType(type: VisaType) {
    this._visaType = type
    return this
  }

  withLink(text: string, href: string) {
    this._links.push(new Link(text, href))
    return this
  }

  withBasicInformation(text: string) {
    this._basicInformation.push(text)
    return this
  }

  withBasicRequirement(text: string) {
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

  get basicInformation() {
    return this._basicInformation
  }

  get visaType() {
    return this._visaType
  }
}
