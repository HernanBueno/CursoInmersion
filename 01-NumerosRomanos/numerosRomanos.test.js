import { convertirANumeroRomano } from './convertirANumeroRomano';

test("convierte los números del 1 al 10 a números romanos", () => {
    expect(convertirANumeroRomano(1)).toEqual("I");
    expect(convertirANumeroRomano(2)).toEqual("II");
    expect(convertirANumeroRomano(3)).toEqual("III");
    expect(convertirANumeroRomano(4)).toEqual("IV");
    expect(convertirANumeroRomano(5)).toEqual("V");
    expect(convertirANumeroRomano(6)).toEqual("VI");
    expect(convertirANumeroRomano(7)).toEqual("VII");
    expect(convertirANumeroRomano(8)).toEqual("VIII");
    expect(convertirANumeroRomano(9)).toEqual("IX");
    expect(convertirANumeroRomano(10)).toEqual("X");
});




test("convierte del 10 al 13 a números romanos", () => {    
    expect(convertirANumeroRomano(11)).toEqual("XI");
    expect(convertirANumeroRomano(12)).toEqual("XII");
    expect(convertirANumeroRomano(13)).toEqual("XIII");
    expect(convertirANumeroRomano(14)).toEqual("XIV");
    expect(convertirANumeroRomano(15)).toEqual("XV");
    expect(convertirANumeroRomano(16)).toEqual("XVI");
    expect(convertirANumeroRomano(17)).toEqual("XVII");
    expect(convertirANumeroRomano(18)).toEqual("XVIII");
    expect(convertirANumeroRomano(19)).toEqual("XIX");
});
test("convierte del 20 al 29 a números romanos", () => {
    expect(convertirANumeroRomano(20)).toEqual("XX");
    expect(convertirANumeroRomano(21)).toEqual("XXI");
    expect(convertirANumeroRomano(22)).toEqual("XXII");
    expect(convertirANumeroRomano(23)).toEqual("XXIII");
    expect(convertirANumeroRomano(24)).toEqual("XXIV");
    expect(convertirANumeroRomano(25)).toEqual("XXV");
    expect(convertirANumeroRomano(26)).toEqual("XXVI");
    expect(convertirANumeroRomano(27)).toEqual("XXVII");
    expect(convertirANumeroRomano(28)).toEqual("XXVIII");
    expect(convertirANumeroRomano(29)).toEqual("XXIX");
});
test("convierte del 30 al 39 a números romanos", () => {
    expect(convertirANumeroRomano(30)).toEqual("XXX");
    expect(convertirANumeroRomano(31)).toEqual("XXXI");
    expect(convertirANumeroRomano(32)).toEqual("XXXII");
    expect(convertirANumeroRomano(33)).toEqual("XXXIII");
    expect(convertirANumeroRomano(34)).toEqual("XXXIV");
    expect(convertirANumeroRomano(35)).toEqual("XXXV");
    expect(convertirANumeroRomano(36)).toEqual("XXXVI");
    expect(convertirANumeroRomano(37)).toEqual("XXXVII");
    expect(convertirANumeroRomano(38)).toEqual("XXXVIII");
    expect(convertirANumeroRomano(39)).toEqual("XXXIX");
});
test("convierte del 40 al 49 a números romanos", () => {
    expect(convertirANumeroRomano(40)).toEqual("XL");
    expect(convertirANumeroRomano(41)).toEqual("XLI");
    expect(convertirANumeroRomano(42)).toEqual("XLII");
    expect(convertirANumeroRomano(43)).toEqual("XLIII");    
    expect(convertirANumeroRomano(44)).toEqual("XLIV");
    expect(convertirANumeroRomano(45)).toEqual("XLV");
    expect(convertirANumeroRomano(46)).toEqual("XLVI");
    expect(convertirANumeroRomano(47)).toEqual("XLVII");
    expect(convertirANumeroRomano(48)).toEqual("XLVIII");
    expect(convertirANumeroRomano(49)).toEqual("XLIX");
});
test("convierte del 50 al 59 a números romanos", () => {
    expect(convertirANumeroRomano(50)).toEqual("L");
    expect(convertirANumeroRomano(51)).toEqual("LI");
    expect(convertirANumeroRomano(52)).toEqual("LII");
    expect(convertirANumeroRomano(53)).toEqual("LIII");
    expect(convertirANumeroRomano(54)).toEqual("LIV");
    expect(convertirANumeroRomano(55)).toEqual("LV");
    expect(convertirANumeroRomano(56)).toEqual("LVI");
    expect(convertirANumeroRomano(57)).toEqual("LVII");
    expect(convertirANumeroRomano(58)).toEqual("LVIII");
    expect(convertirANumeroRomano(59)).toEqual("LIX");
});
test("convierte del 60 al 69 a números romanos", () => {
    expect(convertirANumeroRomano(60)).toEqual("LX");
    expect(convertirANumeroRomano(61)).toEqual("LXI");
    expect(convertirANumeroRomano(62)).toEqual("LXII");
    expect(convertirANumeroRomano(63)).toEqual("LXIII");
    expect(convertirANumeroRomano(64)).toEqual("LXIV");
    expect(convertirANumeroRomano(65)).toEqual("LXV");
    expect(convertirANumeroRomano(66)).toEqual("LXVI");
    expect(convertirANumeroRomano(67)).toEqual("LXVII");
    expect(convertirANumeroRomano(68)).toEqual("LXVIII");
    expect(convertirANumeroRomano(69)).toEqual("LXIX");
});
test("convierte del 70 al 79 a números romanos", () => {
    expect(convertirANumeroRomano(70)).toEqual("LXX");
    expect(convertirANumeroRomano(71)).toEqual("LXXI");
    expect(convertirANumeroRomano(72)).toEqual("LXXII");
    expect(convertirANumeroRomano(73)).toEqual("LXXIII");
    expect(convertirANumeroRomano(74)).toEqual("LXXIV");
    expect(convertirANumeroRomano(75)).toEqual("LXXV");
    expect(convertirANumeroRomano(76)).toEqual("LXXVI");
    expect(convertirANumeroRomano(77)).toEqual("LXXVII");
    expect(convertirANumeroRomano(78)).toEqual("LXXVIII");
    expect(convertirANumeroRomano(79)).toEqual("LXXIX");
});
test("convierte del 80 al 89 a números romanos", () => {
    expect(convertirANumeroRomano(80)).toEqual("LXXX");
    expect(convertirANumeroRomano(81)).toEqual("LXXXI");
    expect(convertirANumeroRomano(82)).toEqual("LXXXII");
    expect(convertirANumeroRomano(83)).toEqual("LXXXIII");
    expect(convertirANumeroRomano(84)).toEqual("LXXXIV");
    expect(convertirANumeroRomano(85)).toEqual("LXXXV");
    expect(convertirANumeroRomano(86)).toEqual("LXXXVI");
    expect(convertirANumeroRomano(87)).toEqual("LXXXVII");
    expect(convertirANumeroRomano(88)).toEqual("LXXXVIII");
    expect(convertirANumeroRomano(89)).toEqual("LXXXIX");
});
test("convierte del 90 al 99 a números romanos", () => {
    expect(convertirANumeroRomano(90)).toEqual("XC");
    expect(convertirANumeroRomano(91)).toEqual("XCI");
    expect(convertirANumeroRomano(92)).toEqual("XCII");
    expect(convertirANumeroRomano(93)).toEqual("XCIII");
    expect(convertirANumeroRomano(94)).toEqual("XCIV");
    expect(convertirANumeroRomano(95)).toEqual("XCV");
    expect(convertirANumeroRomano(96)).toEqual("XCVI");
    expect(convertirANumeroRomano(97)).toEqual("XCVII");
    expect(convertirANumeroRomano(98)).toEqual("XCVIII");
    expect(convertirANumeroRomano(99)).toEqual("XCIX");
});
test("convierte del 100 al 109 a números romanos", () => {
    expect(convertirANumeroRomano(100)).toEqual("C");    
});
test("convierte del 110 al 160 a números romanos", () => {
    expect(convertirANumeroRomano(110)).toEqual("CX");
    expect(convertirANumeroRomano(120)).toEqual("CXX");
    expect(convertirANumeroRomano(130)).toEqual("CXXX");
    expect(convertirANumeroRomano(140)).toEqual("CXL");
    expect(convertirANumeroRomano(150)).toEqual("CL");
    expect(convertirANumeroRomano(160)).toEqual("CLX");
    expect(convertirANumeroRomano(170)).toEqual("CLXX");
    expect(convertirANumeroRomano(180)).toEqual("CLXXX");
   
});

test("convierte del 200 al 299 a números romanos", () => {
    expect(convertirANumeroRomano(200)).toEqual("CC");
    expect(convertirANumeroRomano(250)).toEqual("CCL"); 
    expect(convertirANumeroRomano(251)).toEqual("CCLI");     
});

test("convierte del 300 al 399 a números romanos", () => {
    expect(convertirANumeroRomano(300)).toEqual("CCC");
    expect(convertirANumeroRomano(350)).toEqual("CCCL"); 
    expect(convertirANumeroRomano(351)).toEqual("CCCLI");    
});

test("convierte del 400 al 499 a números romanos", () => {
    expect(convertirANumeroRomano(400)).toEqual("CD");
    expect(convertirANumeroRomano(450)).toEqual("CDL"); 
    expect(convertirANumeroRomano(451)).toEqual("CDLI");    
});

test("convierte del 500 al 599 a números romanos", () => {
    expect(convertirANumeroRomano(500)).toEqual("D");
    expect(convertirANumeroRomano(550)).toEqual("DL"); 
    expect(convertirANumeroRomano(551)).toEqual("DLI");    
});

test("convierte del 600 al 699 a números romanos", () => {
    expect(convertirANumeroRomano(600)).toEqual("DC");
    expect(convertirANumeroRomano(650)).toEqual("DCL"); 
    expect(convertirANumeroRomano(651)).toEqual("DCLI");    
});

test("convierte del 700 al 799 a números romanos", () => {
    expect(convertirANumeroRomano(700)).toEqual("DCC");
    expect(convertirANumeroRomano(750)).toEqual("DCCL"); 
    expect(convertirANumeroRomano(751)).toEqual("DCCLI");    
});

test("convierte del 800 al 899 a números romanos", () => {
    expect(convertirANumeroRomano(800)).toEqual("DCCC");
    expect(convertirANumeroRomano(850)).toEqual("DCCCL"); 
    expect(convertirANumeroRomano(851)).toEqual("DCCCLI");    
});

test("convierte del 900 al 999 a números romanos", () => {
    expect(convertirANumeroRomano(900)).toEqual("CM");
    expect(convertirANumeroRomano(950)).toEqual("CML"); 
    expect(convertirANumeroRomano(951)).toEqual("CMLI");    
});



