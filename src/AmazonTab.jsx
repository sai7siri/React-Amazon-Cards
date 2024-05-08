import React from "react";
import Amazoncard from "./Amazoncard";

function AmazonTab() {
  const products = [
    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0IyMmhwNm1HTHhnVk5VN0dRb3FBNEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2g3aHFOc0RlQlduNzZ3d2xCVDdFUXZ3PT0=&traceId=1",
    "https://m.media-amazon.com/images/I/511AYQhtskL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/61yeC+2-dIL._SX425_.jpg",
    "https://m.media-amazon.com/images/I/41o8R7so4HL._AC_UY218_.jpg",
  ];

  let links = [
    "https://www.amazon.in/Apple-iPhone-Pro-Max-256/dp/B0CHWV2WYK/ref=sr_1_1_sspa?crid=IZL7MWYOS86A&dib=eyJ2IjoiMSJ9.OYvib3u__hXFvKmx0hKSh9JFAZDQbD7njknfEaz-I7axb6LxJQqddpKbhcaYu2b52OjYzbpytuAwGWzEQ0oXABnPJkRa3Hzh5SRduEi-5CXIFANY5ifI6igpRCatasOXKsgbBwZbVzNie2MgCHIeMr6Zcg-eLmVE6hHhQIHgibK7k8GyrwsE2m_6pSzXqdIsMARXQIqbWu51AytUyf-dWCMKFaH-Q2UGHrBQp67pSHg.-uQKKjpBitDHoebzdbtK-CU_5i-iFJavGXMYhv3eXUQ&dib_tag=se&keywords=iphone+15+pro+max&qid=1715180198&sprefix=iph%2Caps%2C704&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",

    "https://www.amazon.in/Amazon-Basics-Upgraded-Stylus-White/dp/B0CCPCK17S/ref=sr_1_4?crid=3TYFLPLECUJPK&dib=eyJ2IjoiMSJ9.QMF7t-AXJ2zLnhbwnDN0Qp2V16mXeGxdfz5fcpTjGdZZQKwS3a_1ZcroQnFVdG6v11YBBGW31wgASkWRDXGYot-yQsgipWj0yc25R2Uj-S4PKaLV-2dRp6wJjZ1cZ9Oj6CKe7m83AVpH7HqmcgWD_p6Zp-yO6aG4UefatjEVneIwwcb2cYv-5LZ3f0D5tzAefc3ulnKCS8dJBrb6OFlXulu3X8PZtDvjrfgmlqsr_MM.Mc0xIJVxHZTl58z4ecp1bk0Zgdcp9C-XQMOPJHL8QnE&dib_tag=se&keywords=apple+pencil+2+generation&qid=1715180342&sprefix=apple+pen%2Caps%2C327&sr=8-4",

    "https://www.amazon.in/ZEBRONICS-Bluetooth-Headphones-assistant-Comfortable/dp/B07L8KNP5F/ref=sr_1_5?dib=eyJ2IjoiMSJ9fe1N-QYnEKp_THTFKBIO4Xz2j0TmZnjEcfCWGIkSINmWRwm3JBZXGVwk8Dkq1LF9fem3v20SP-WNO7MvpUF8M4KiSXQ0XEkJtSJaUalC5DPdwuCBauGmiSyr79VWPlnatpAkL52cVC5NhdV0V7rKdlZzlkDF6UPc-AhxHJRv2wcddl48cvuLHXrs4o_-atYuyjIPQUBBE2nHZiras_g5THYZzMqH62dcdBba5X3xFt4.8kMlzNs8NxD475Z3rWIX5nD0fnm9CcQ6yLF0oSYtPcI&dib_tag=se&keywords=zebronics&qid=1715182909&sr=8-5",

    "https://www.amazon.in/Portronics-Connectivity-Rechargeable-Adjustable-Smartphone/dp/B0CR15MT7L/ref=asc_df_B0CR15MT7L/?tag=googleshopdes-21&linkCode=df0&hvadid=686148819495&hvpos=&hvnetw=g&hvrand=6164211217254356264&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007740&hvtargid=pla-2271041473402&psc=1&mcid=b0319ca6789e33919d123cbabc5d1482&gad_source=1",

  ];

  let media = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
    rowGap: "10px",
  };

  return (
    <div style={media}>
      <Amazoncard
        title="iPhone 15 Pro Max"
        images={products}
        link={links}
        idx={0}
      />
      <Amazoncard
        title="Apple Pencil (2nd Gen)"
        images={products}
        link={links}
        idx={1}
      />
      <Amazoncard 
        title="Zebronics" 
        images={products} 
        links={links} 
        idx={2} />
      <Amazoncard
        title="petronics Toad"
        images={products}
        link={links}
        idx={3}
      />
    </div>
  );
}

export default AmazonTab;
