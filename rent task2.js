function locatio(km, day) {
  let ins = 0.3;
  let vat = 0.18;
  let priceByDay = 100;
  let rentBykm;
  let kmTotal1 = 0;
  let kmTotal2 = 0;
  let kmTotal3 = 0;
  let kmTotal;
  let dayTotal;
  let cost;

  if (km <= 100) {
    rentBykm = km * 0.7;
    kmTotal1 = rentBykm + day * ins;
  } else if (km <= 1000) {
    rentBykm = 100 * 0.7 + (km - 100) * 0.4;
    kmTotal2 = rentBykm + day * ins;
  } else {
    rentBykm = 100 * 0.7 + 900 * 0.4 + (km - 1000) * 0.2;
    kmTotal3 = rentBykm + day * ins;
  }

  kmTotal =
    kmTotal1 + kmTotal2 + kmTotal3 + (kmTotal1 + kmTotal2 + kmTotal3) * vat;

  dayTotal =
    day * ins + day * priceByDay + (day * ins + day * priceByDay) * vat;
console.log(kmTotal,dayTotal);
  if (dayTotal < kmTotal) {
    cost = "pay by day is better";
  } else cost = "pay by km is better";

  return cost;
}

console.log(locatio(1000, 5));
