import { SubDomainCheckModel } from "../model";

export const getSubdomain = (url: string): SubDomainCheckModel => {
  const activeDomains = ["dev", "prod", "auth", "test"];
  const urlPattern = /^(?:https?:\/\/)?(?:www\.)?([^\/:]+)\./;

  const match = url.match(urlPattern);
  const subDomainName = match ? match[1] : "";

  const domainStatus: SubDomainCheckModel = {
    isLandingPage: true,
    isSubDomain: false,
    activeSubDomain: false,
    name: "",
  };

  if (subDomainName) {
    const isSubDomainAvailable = activeDomains.includes(subDomainName);

    return {
      isLandingPage: false,
      isSubDomain: true,
      activeSubDomain: isSubDomainAvailable,
      name: subDomainName,
    };
  }

  return domainStatus;
};
