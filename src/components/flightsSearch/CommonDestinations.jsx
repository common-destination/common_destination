// import React, { useEffect, useState } from "react";
// import { useTheme } from "../../ThemeContext.js";

function CommonDestinations(className) {
  // const [commonDestinations, setCommonDestinations] = useState([]);
  // const { backendUrl } = useTheme();

  // useEffect(() => {
  //   (async () => {
  //     const requestOptions = {
  //       method: "GET",
  //       credentials: "include",
  //     };
  //     const response = await fetch(
  //       `${backendUrl}/flights/common-destination`,
  //       requestOptions
  //     );
  //     if (response.ok) {
  //       const _commonDestinations = await response.json();
  //       setCommonDestinations((prev) => [...prev, _commonDestinations]);
  //       console.log(commonDestinations);
  //     }
  //   })();
  //   // console.log(currentUser);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <div className={className}></div>;
}

export default CommonDestinations;
