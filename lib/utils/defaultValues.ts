export const defaultPaddingX =
    "px-[16px] sm:px-6 md:px-[48px] lg:px-[88px] xl:px-[152px] 2xl:px-[248px]";
export const defaultPaddingL =
    "pl-[16px] sm:pl-10 md:pl-[72px] lg:pl-[104px] xl:pl-[168px] 2xl:pl-[264px]";
export const defaultPaddingY2 = "py-[112px]";

export const defaultPaddingY = "py-[64px] md:py-[80px] lg:py-[104px]";
export const defaultPadding = `${defaultPaddingX} ${defaultPaddingY2}`;

export const pageTitle = "font-semibold text-2xl my-4 text-gray-800";
export const mainTitle = "font-semibold text-xl mt-2";
export const mainText = "font-semibold text-lg mt-2 text-gray-700";
export const subTitle = "font-semibold text-base mt-2";
export const subText = "font-semibold text-sm mt-2";

export type Option = {
    label: string,
    value: string
  }

  export type DropdownItem = {
    iconUrl?: string;
    label: string;
    value: string | number;
  };

export const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

export const roles: { [key: string]: string[] } = {
    'Fitlov_Admin':[
        "SUPER_ADMIN",
        "ADMIN",
        "SALES",
        "FINANCE",
    ],
    'Corporate_Admin':[
        "ACCOUNT_HOLDER",
        "CHIEF_FITNESS_OFFICER",
        "MANAGER",
    ],
    'Employee':[
        "EMPLOYEE"
    ]
}
export const roleOrder: { [key: string]: number } = {
    'Fitlov_Admin': 3,
    'Corporate_Admin': 2,
    'Employee': 1
};

export const colors = {
    white: "#FFFFFF",
    argent: "#C0C0C0",
    cultured: "#F6F6F6",
    fitlov: "#3FC7E0",
    text: "#585858",
    brightGray: "#EDEDED",
    budGreen: "#6FB559",
    azure: "#007AFF",
    gold: "#D4AF37",
    oldSilver: "#848482",
    bronze: "#CD7F32",
    bloodOrange: "#D0021B",
    mantis: "#6FBF55",
    cyberYellow: "#6FBF55",
    philippineGray: "#8E8E8F",
    mauve: "#E3AEF0",
    boogerBuster: "#DAE477",
    lightSilver: "#D9D9D9",
    nickel: "#727272",
    darkLiver: "#505050",
    columbiaBlue: "#CAD8ED",
  };

  export const targetTypeOption = [
    { label: "Individual", value: "INDIVIDUAL" },
    { label: "Group", value: "GROUP" },
  ];

  export type TargetType = "INDIVIDUAL" | "GROUP";
