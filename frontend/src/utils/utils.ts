export function timeAgo(time: number) {
  const min = 60;
  const hour = 60 * min;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * month;

  const timeFormats = [
    { token: "Agora mesmo", timeFromNow: 0, returnJustToken: true },
    { token: "1 minuto atrás", timeFromNow: 120, returnJustToken: true },
    { token: "minutos atrás", timeFromNow: 3600, getTime: (sec: number) => sec / min },
    { token: "1 hora atrás", timeFromNow: 7200, returnJustToken: true },
    { token: "horas atrás", timeFromNow: 86400, getTime: (sec: number) => sec / hour },
    { token: "Ontem", timeFromNow: 172800, returnJustToken: true },
    { token: "dias atrás", timeFromNow: 604800, getTime: (sec: number) => sec / day },
    { token: "Semana passada", timeFromNow: 1209600, returnJustToken: true },
    { token: "semanas", timeFromNow: 2419200, getTime: (sec: number) => sec / week },
    { token: "Mês passado", timeFromNow: 4838400, returnJustToken: true },
    { token: "meses atrás", timeFromNow: 29030400, getTime: (sec: number) => sec / month },
    { token: "Ano passado", timeFromNow: 58060800, returnJustToken: true },
    { token: "anos atrás", timeFromNow: Infinity, getTime: (sec: number) => sec / year },
  ];
  const seconds = (Date.now() - time) / 1000;
  const index = timeFormats.findIndex(timeFormat => seconds < timeFormat.timeFromNow);
  const format = timeFormats[index];

  if (format.returnJustToken) return format.token;
  return `${format.getTime(seconds).toFixed()} ${format.token}`;
}

export function getPortuguesTextNumber(visitCount: number): string {
  if (visitCount < 1000) return visitCount.toString();
  else if (visitCount < 10 ** 6) return `${(visitCount / 1000).toFixed()} mil`;
  return `${(visitCount / 10 ** 6).toFixed()} milhões`;
}
