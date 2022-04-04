// from https://gist.github.com/evolkmann/740d24889c509c08484a8ff72af5dd64
// Inspired by https://gist.github.com/kyranjamie/646386d5edc174e8b549111572897f81
// see https://gist.github.com/KingDarBoja/cf664cc395c4d95e645fd1f720c13746 for the three-letter-variant

export enum Country {
  AF = 'Afghanistan',
  AX = 'AlandIslands',
  AL = 'Albania',
  DZ = 'Algeria',
  AS = 'American Samoa',
  AD = 'Andorra',
  AO = 'Angola',
  AI = 'Anguilla',
  AQ = 'Antarctica',
  AG = 'Antigua and Barbuda',
  AR = 'Argentina',
  AM = 'Armenia',
  AW = 'Aruba',
  AU = 'Australia',
  AT = 'Austria',
  AZ = 'Azerbaijan',
  BS = 'Bahamas',
  BH = 'Bahrain',
  BD = 'Bangladesh',
  BB = 'Barbados',
  BY = 'Belarus',
  BE = 'Belgium',
  BZ = 'Belize',
  BJ = 'Benin',
  BM = 'Bermuda',
  BT = 'Bhutan',
  BO = 'Bolivia',
  BA = 'Bosnia and Herzegovina',
  BW = 'Botswana',
  BV = 'Bouvet Island',
  BR = 'Brazil',
  IO = 'British Indian Ocean Territory',
  BN = 'Brunei Darussalam',
  BG = 'Bulgaria',
  BF = 'Burkina Faso',
  BI = 'Burundi',
  KH = 'Cambodia',
  CM = 'Cameroon',
  CA = 'Canada',
  CV = 'Cape Verde',
  KY = 'Cayman Islands',
  CF = 'Central African Republic',
  TD = 'Chad',
  CL = 'Chile',
  CN = 'China',
  CX = 'Christmas Island',
  CC = 'Cocos Keeling Islands',
  CO = 'Colombia',
  KM = 'Comoros',
  CG = 'Congo',
  CD = 'Congo Democratic Republic',
  CK = 'Cook Islands',
  CR = 'Costa Rica',
  CI = 'CoteDIvoire',
  HR = 'Croatia',
  CU = 'Cuba',
  CW = 'Curaçao',
  CY = 'Cyprus',
  CZ = 'CzechRepublic',
  DK = 'Denmark',
  DJ = 'Djibouti',
  DM = 'Dominica',
  DO = 'Dominican Republic',
  EC = 'Ecuador',
  EG = 'Egypt',
  SV = 'El Salvador',
  GQ = 'Equatorial Guinea',
  ER = 'Eritrea',
  EE = 'Estonia',
  ET = 'Ethiopia',
  FK = 'Falkland Islands',
  FO = 'Faroe Islands',
  FJ = 'Fiji',
  FI = 'Finland',
  FR = 'France',
  GF = 'French Guiana',
  PF = 'French Polynesia',
  TF = 'French Southern Territories',
  GA = 'Gabon',
  GM = 'Gambia',
  GE = 'Georgia',
  DE = 'Germany',
  GH = 'Ghana',
  GI = 'Gibraltar',
  GR = 'Greece',
  GL = 'Greenland',
  GD = 'Grenada',
  GP = 'Guadeloupe',
  GU = 'Guam',
  GT = 'Guatemala',
  GG = 'Guernsey',
  GN = 'Guinea',
  GW = 'Guinea Bissau',
  GY = 'Guyana',
  HT = 'Haiti',
  HM = 'Heard Island Mcdonald Islands',
  VA = 'Holy See Vatican City State',
  HN = 'Honduras',
  HK = 'HongKong',
  HU = 'Hungary',
  IS = 'Iceland',
  IN = 'India',
  ID = 'Indonesia',
  IR = 'Iran',
  IQ = 'Iraq',
  IE = 'Ireland',
  IM = 'Isle Of Man',
  IL = 'Israel',
  IT = 'Italy',
  JM = 'Jamaica',
  JP = 'Japan',
  JE = 'Jersey',
  JO = 'Jordan',
  KZ = 'Kazakhstan',
  KE = 'Kenya',
  KI = 'Kiribati',
  KR = 'Korea, Republic of',
  KP = 'Korea, Democratic People\'s Republic of',
  KW = 'Kuwait',
  KG = 'Kyrgyzstan',
  LA = 'Lao Peoples Democratic Republic',
  LV = 'Latvia',
  LB = 'Lebanon',
  LS = 'Lesotho',
  LR = 'Liberia',
  LY = 'Libyan Arab Jamahiriya',
  LI = 'Liechtenstein',
  LT = 'Lithuania',
  LU = 'Luxembourg',
  MO = 'Macao',
  MG = 'Madagascar',
  MW = 'Malawi',
  MY = 'Malaysia',
  MV = 'Maldives',
  ML = 'Mali',
  MT = 'Malta',
  MH = 'Marshall Islands',
  MQ = 'Martinique',
  MR = 'Mauritania',
  MU = 'Mauritius',
  YT = 'Mayotte',
  MX = 'Mexico',
  FM = 'Micronesia',
  MD = 'Moldova',
  MC = 'Monaco',
  MN = 'Mongolia',
  ME = 'Montenegro',
  MS = 'Montserrat',
  MA = 'Morocco',
  MZ = 'Mozambique',
  MM = 'Myanmar',
  NA = 'Namibia',
  NR = 'Nauru',
  NP = 'Nepal',
  NL = 'Netherlands',
  NC = 'New Caledonia',
  NZ = 'New Zealand',
  NI = 'Nicaragua',
  NE = 'Niger',
  NG = 'Nigeria',
  NU = 'Niue',
  NF = 'Norfolk Island',
  MP = 'Northern Mariana Islands',
  NO = 'Norway',
  OM = 'Oman',
  PK = 'Pakistan',
  PW = 'Palau',
  PS = 'Palestinian Territory',
  PA = 'Panama',
  PG = 'Papua New Guinea',
  PY = 'Paraguay',
  PE = 'Peru',
  PH = 'Philippines',
  PN = 'Pitcairn',
  PL = 'Poland',
  PT = 'Portugal',
  PR = 'Puerto Rico',
  QA = 'Qatar',
  RE = 'Reunion',
  MKD = 'Republic of North Macedonia',
  RO = 'Romania',
  RU = 'Russian Federation',
  RW = 'Rwanda',
  BL = 'Saint Barthelemy',
  SH = 'Saint Helena',
  KN = 'Saint Kitts And Nevis',
  LC = 'Saint Lucia',
  MF = 'Saint Martin',
  PM = 'Saint Pierre And Miquelon',
  VC = 'Saint Vincent And Grenadines',
  WS = 'Samoa',
  SM = 'San Marino',
  ST = 'Sao Tome And Principe',
  SA = 'Saudi Arabia',
  SN = 'Senegal',
  RS = 'Serbia',
  SC = 'Seychelles',
  SL = 'Sierra Leone',
  SG = 'Singapore',
  SK = 'Slovakia',
  SI = 'Slovenia',
  SB = 'Solomon Islands',
  SO = 'Somalia',
  ZA = 'South Africa',
  GS = 'South Georgia And Sandwich Island',
  ES = 'Spain',
  LK = 'Sri Lanka',
  SD = 'Sudan',
  SS = 'South Sudan',
  SR = 'Suriname',
  SJ = 'Svalbard And Jan Mayen',
  SZ = 'Swaziland',
  SE = 'Sweden',
  CH = 'Switzerland',
  SX = 'Sint Maarten (Dutch part)',
  SY = 'Syrian Arab Republic',
  TW = 'Taiwan',
  TJ = 'Tajikistan',
  TZ = 'Tanzania',
  TH = 'Thailand',
  TL = 'TimorLeste',
  TG = 'Togo',
  TK = 'Tokelau',
  TO = 'Tonga',
  TT = 'Trinidad And Tobago',
  TN = 'Tunisia',
  TR = 'Turkey',
  TM = 'Turkmenistan',
  TC = 'Turks And Caicos Islands',
  TV = 'Tuvalu',
  UG = 'Uganda',
  UA = 'Ukraine',
  AE = 'United Arab Emirates',
  GB = 'United Kingdom',
  US = 'United States',
  UM = 'United States Outlying Islands',
  UY = 'Uruguay',
  UZ = 'Uzbekistan',
  VU = 'Vanuatu',
  VE = 'Venezuela',
  VN = 'Vietnam',
  VG = 'Virgin Islands British',
  VI = 'Virgin Islands US',
  WF = 'Wallis And Futuna',
  EH = 'Western Sahara',
  YE = 'Yemen',
  ZM = 'Zambia',
  ZW = 'Zimbabwe'
}
