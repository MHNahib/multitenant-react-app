import { useEffect, useState } from "react";

import { getSubdomain } from "./utils";

import DomainPage from "./Pages/Domain/Domain.Page";
import HomePage from "./Pages/Home/Home.Page";
import NotFoundPage from "./Pages/NotFound/NotFound.Page";

import { SubDomainCheckModel } from "./model";

function useSubDomain(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [subDomain, setSubDomain] = useState<SubDomainCheckModel>({
    isLandingPage: true,
    isSubDomain: false,
    activeSubDomain: false,
    name: "",
  });

  useEffect(() => {
    const subDomainName = getSubdomain(url);
    if (subDomainName) setSubDomain(subDomainName);
    setIsLoading(false);
  }, [url]);

  return { isLoading, subDomain };
}

function App() {
  const url = window.location.href;
  const { isLoading, subDomain } = useSubDomain(url);

  const renderPage = () => {
    if (isLoading) return <div className="loader"></div>;

    if (subDomain.activeSubDomain) {
      return <DomainPage subDomain={subDomain.name} />;
    }

    if (subDomain.isLandingPage) {
      return <HomePage />;
    }

    return <NotFoundPage />;
  };

  return <div className="centered">{renderPage()}</div>;
}

export default App;
