"use strict";

// single functions to calculate multiple characteristics
const calcDexInt = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("dexScore").value) +
    Number(document.getElementById("intScore").value);
};

const calcDexPow = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("dexScore").value) +
    Number(document.getElementById("powScore").value);
};

const calcIntCha = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("intScore").value) +
    Number(document.getElementById("chaScore").value);
};

const calcIntPow = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("intScore").value) +
    Number(document.getElementById("powScore").value);
};

const calcStrDex = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("strScore").value) +
    Number(document.getElementById("dexScore").value);
};

// multiplication functions
function calcMultiplied(base, attribute) {
  document.getElementById(base).value =
    Number(document.getElementById(attribute).value) * 2;
}

const calcStrSiz = (id) => {
  document.getElementById(id).value =
    Number(document.getElementById("strScore").value) +
    Number(document.getElementById("sizScore").value);
};

// single function to calculate modified percentages for standard skills
const calcSkillMod = (mod) => Number(document.getElementById(mod).value);

// single function to calculate the standard skill totals
function calcSkillTotals(total, base, mod) {
  document.getElementById(total).value =
    Number(document.getElementById(base).value) +
    Number(document.getElementById(mod).value);
}

// calculate the base standard skills
const calcBaseStandardSkills = () => {
  calcStrDex("athleticsBaseScore");
  calcStrSiz("brawnBaseScore");
  calcDexInt("firstAidBaseScore");
  calcDexInt("stealthBaseScore");
  calcDexPow("concealBaseScore");
  calcDexPow("driveBaseScore");
  calcIntCha("deceitBaseScore");
  calcIntCha("streetwiseBaseScore");
  calcIntPow("insightBaseScore");
  calcIntPow("perceptionBaseScore");
  calcIntPow("researchBaseScore");
  calcMultiplied("enduranceBaseScore", "conScore");
  calcMultiplied("evadeBaseScore", "dexScore");
  calcMultiplied("influenceBaseScore", "chaScore");
  calcMultiplied("willpowerBaseScore", "powScore");
  calcStrDex("unarmedBaseScore");
};

// calculate the modified standard skills
const calcModStandardSkills = () => {
  document.getElementById("totalSkillPointsRemaining").value =
    document.getElementById("totalSkillPointsAvailable").value -
    (calcSkillMod("athleticsModScore") +
      calcSkillMod("brawnModScore") +
      calcSkillMod("concealModScore") +
      calcSkillMod("deceitModScore") +
      calcSkillMod("driveModScore") +
      calcSkillMod("enduranceModScore") +
      calcSkillMod("evadeModScore") +
      calcSkillMod("firstAidModScore") +
      calcSkillMod("influenceModScore") +
      calcSkillMod("insightModScore") +
      calcSkillMod("perceptionModScore") +
      calcSkillMod("researchModScore") +
      calcSkillMod("stealthModScore") +
      calcSkillMod("streetwiseModScore") +
      calcSkillMod("unarmedModScore") +
      calcSkillMod("willpowerModScore"));
};

// calculate the total base standard skills
const calcTotalStandardSkills = () => {
  calcSkillTotals(
    "athleticsTotalScore",
    "athleticsBaseScore",
    "athleticsModScore"
  );
  calcSkillTotals("brawnTotalScore", "brawnBaseScore", "brawnModScore");
  calcSkillTotals("concealTotalScore", "concealBaseScore", "concealModScore");
  calcSkillTotals("deceitTotalScore", "deceitBaseScore", "deceitModScore");
  calcSkillTotals("driveTotalScore", "driveBaseScore", "driveModScore");
  calcSkillTotals(
    "enduranceTotalScore",
    "enduranceBaseScore",
    "enduranceModScore"
  );
  calcSkillTotals("evadeTotalScore", "evadeBaseScore", "evadeModScore");
  calcSkillTotals(
    "firstAidTotalScore",
    "firstAidBaseScore",
    "firstAidModScore"
  );
  calcSkillTotals(
    "influenceTotalScore",
    "influenceBaseScore",
    "influenceModScore"
  );
  calcSkillTotals("insightTotalScore", "insightBaseScore", "insightModScore");
  calcSkillTotals(
    "perceptionTotalScore",
    "perceptionBaseScore",
    "perceptionModScore"
  );
  calcSkillTotals(
    "researchTotalScore",
    "researchBaseScore",
    "researchModScore"
  );
  calcSkillTotals("stealthTotalScore", "stealthBaseScore", "stealthModScore");
  calcSkillTotals(
    "streetwiseTotalScore",
    "streetwiseBaseScore",
    "streetwiseModScore"
  );
  calcSkillTotals("unarmedTotalScore", "unarmedBaseScore", "unarmedModScore");
  calcSkillTotals(
    "willpowerTotalScore",
    "willpowerBaseScore",
    "willpowerModScore"
  );
};

// single function to calculate the professional skills mod percentages
const calcProfSkillMod = (mod) => Number(document.getElementById(mod).value);

// single function calculate the total professional skill values
function calcProfSkillTotals(total, base, mod) {
  document.getElementById(total).value =
    Number(document.getElementById(base).value) +
    Number(document.getElementById(mod).value);
}

// calculate the modified professional skills
const calcModProfessionalSkills = () => {
  document.getElementById("totalSkillPointsRemaining").value =
    document.getElementById("totalSkillPointsRemaining").value -
    (calcProfSkillMod("profSkillModValue1") +
      calcProfSkillMod("profSkillModValue2") +
      calcProfSkillMod("profSkillModValue3") +
      calcProfSkillMod("profSkillModValue4") +
      calcProfSkillMod("profSkillModValue5") +
      calcProfSkillMod("profSkillModValue6") +
      calcProfSkillMod("profSkillModValue7"));
};

// calculate the total professional skills
const calcTotalProfessionalSkills = () => {
  calcProfSkillTotals(
    "profSkillTotalValue1",
    "profSkillBaseValue1",
    "profSkillModValue1"
  );
  calcProfSkillTotals(
    "profSkillTotalValue2",
    "profSkillBaseValue2",
    "profSkillModValue2"
  );
  calcProfSkillTotals(
    "profSkillTotalValue3",
    "profSkillBaseValue3",
    "profSkillModValue3"
  );
  calcProfSkillTotals(
    "profSkillTotalValue4",
    "profSkillBaseValue4",
    "profSkillModValue4"
  );
  calcProfSkillTotals(
    "profSkillTotalValue5",
    "profSkillBaseValue6",
    "profSkillModValue5"
  );
  calcProfSkillTotals(
    "profSkillTotalValue6",
    "profSkillBaseValue6",
    "profSkillModValue6"
  );
  calcProfSkillTotals(
    "profSkillTotalValue7",
    "profSkillBaseValue7",
    "profSkillModValue7"
  );
};

// calculate languages
const calcLanguages = () => {
  const totalSkillPointsRemaining = document.getElementById(
    "totalSkillPointsRemaining"
  );
  totalSkillPointsRemaining.value =
    totalSkillPointsRemaining.value -
    (Number(document.getElementById("languageValue1").value) +
      Number(document.getElementById("languageValue2").value) +
      Number(document.getElementById("languageValue3").value) +
      Number(document.getElementById("languageValue4").value));
};

// calculate combat styles
const calcCombatStyles = () => {
  const totalSkillPointsRemaining = document.getElementById(
    "totalSkillPointsRemaining"
  );
  totalSkillPointsRemaining.value =
    totalSkillPointsRemaining.value -
    (Number(document.getElementById("combatStyleValue1").value) +
      Number(document.getElementById("combatStyleValue2").value) +
      Number(document.getElementById("combatStyleValue3").value));
};

// calculate the initiative bonus
const calcIniBonus = () => {
  const iniMod = document.getElementById("iniMod");
  iniMod.value = Math.floor(
    (Number(document.getElementById("dexScore").value) +
      Number(document.getElementById("intScore").value)) /
      2
  );
};

// create object for exp
const expMap = {
  1: "-1",
  2: "-1",
  3: "-1",
  4: "-1",
  5: "-1",
  6: "-1",
  7: "0",
  8: "0",
  9: "0",
  10: "0",
  11: "0",
  12: "0",
  13: "1",
  14: "1",
  15: "1",
  16: "1",
  17: "1",
  18: "1",
};

function calcExpModifier(map, source, dest) {
  const s = document.getElementById(source);
  const d = document.getElementById(dest);
  d.value = map[s.value];
}
// create object for healing
const luckHealingMap = {
  1: "1",
  2: "1",
  3: "1",
  4: "1",
  5: "1",
  6: "1",
  7: "2",
  8: "2",
  9: "2",
  10: "2",
  11: "2",
  12: "2",
  13: "3",
  14: "3",
  15: "3",
  16: "3",
  17: "3",
  18: "3",
};

function calcLuckHealing(map, source, dest) {
  const s = document.getElementById(source);
  const d = document.getElementById(dest);
  d.value = map[s.value];
}

const hLocation = () => {
  return (
    Number(document.getElementById("conScore").value) +
    Number(document.getElementById("sizScore").value)
  );
};

const calcLegHitLocationHP = () => {
  let hl = hLocation();
  let value = Math.ceil(hl / 5);
  document.getElementById("locationHP6").value = value;
  document.getElementById("locationHP7").value = value;
};

const calcArmHitLocationHP = () => {
  let hl = hLocation();
  let value = Math.ceil(hl / 10);
  document.getElementById("locationHP2").value = value;
  document.getElementById("locationHP4").value = value;
};

const calcAbdomenHitLocationHP = () => {
  let hl = hLocation();
  let value = Math.ceil(hl / 10) + 1;
  document.getElementById("locationHP5").value = value;
};

const calcChestHitLocationHP = () => {
  let hl = hLocation();
  let value = Math.ceil(hl / 10) + 2;
  document.getElementById("locationHP3").value = value;
};

const calcHeadHitLocationHP = () => {
  let hl = hLocation();
  let value = Math.ceil(hl / 10);
  document.getElementById("locationHP1").value = value;
};

const calcHitLocationHP = () => {
  calcHeadHitLocationHP();
  calcChestHitLocationHP();
  calcAbdomenHitLocationHP();
  calcArmHitLocationHP();
  calcLegHitLocationHP();
  calcLegHitLocationHP();
  calcHitLocationAP();
};

const calcAllHitLocationAP = (id, offset) => {
  let con = Number(document.getElementById("conScore").value);
  let siz = Number(document.getElementById("sizScore").value);
  let value = Math.ceil((con + siz) / 5) + offset;
  document.getElementById(id).value = value;
};

const calcArmLegHitLocationAP = (id) => {
  calcHitLocationAP(id, 0);
};

const calcAbdomenHitLocationAP = (id) => {
  calcHitLocationAP(id, 1);
};

const calcChestHitLocationAP = (id) => {
  calcHitLocationAP(id, 2);
};

const calcHeadHitLocationAP = (id) => {
  calcHitLocationAP(id, -1);
};

const calcHitLocationAP = () => {
  calcAllHitLocationAP("locationAP1", -1);
  calcAllHitLocationAP("locationAP2", 0);
  calcAllHitLocationAP("locationAP3", 2);
  calcAllHitLocationAP("locationAP4", 0);
  calcAllHitLocationAP("locationAP5", 1);
  calcAllHitLocationAP("locationAP6", 0);
  calcAllHitLocationAP("locationAP7", 0);
};

// calculate the attributes
function calcAttributes() {
  calcLuckHealing(luckHealingMap, "powScore", "luckPoints");
  calcLuckHealing(luckHealingMap, "conScore", "healingRate");
  calcIniBonus();
  calcExpModifier(expMap, "chaScore", "expMod");
}
