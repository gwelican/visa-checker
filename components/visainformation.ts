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

  addLink(text: string, href: string) {
    this._links.push(new Link(text, href))
    return this
  }

  addBasic(text: string) {
    this._basicRequirements.push(text)
    return this
  }

  addExpandable(key: string, strings: string[]) {
    if (key in this._groupedRequirements) {
      this._groupedRequirements[key].push(...strings)
    } else {
      this._groupedRequirements[key] = strings
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
}
