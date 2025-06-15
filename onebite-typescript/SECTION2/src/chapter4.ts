// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
}

let user: User= {
  id: 1,
  name: "홍길동",
  nickname: "개똥이",
  birth:"1999.01.01",
}

let user2: User = {
  id:2,
  name: "김길동",
  nickname: "ㅋㅋ",
  birth:"1998.02.05"
};


//인덱스 시그니처
type CountryCodes = {
  [key : string] : string;
};

let countryCodes: CountryCodes = {
  Korea:"ko",
  UnitedState: "us",
  UniedKingdom:"uk"
};


type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes= {
  Korea: 410,
  // UnitedStates: 840,
  // UnikedKingdom: 826,
}