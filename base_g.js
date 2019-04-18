var count=0;
var quotedItems=[];
var quotedAmt=['https://protechint.com/static/images/quoted/pro_tech_note_icon.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_1.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_2.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_3.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_4.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_5.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_6.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_7.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_8.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_9.png', 'https://protechint.com/static/images/quoted/pro_tech_note_icon_9_.png'];
$('#quotedImg').attr('src', quotedAmt[count]);
$('#quotedBinItem').click(function a() {
  var itemsTable='<hr>'
  for (var i = 0; i < quotedItems.length; i++) {
    itemsTable+='<p>'+quotedItems[i]+'</p><hr>'
  }
  $('#quotedBinItems').html(itemsTable)
  $('#id_body').val(quotedItems)
})
$('#twentyFtCCAddBin').click(function a() {
  count+=1;
  quotedItems.push('Container Chassis 20Ft');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#fourtyFtCCAddBin').click(function a() {
  count+=1;
  quotedItems.push('Container Chassis 40Ft');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
//division
$('#extendableAddBin').click(function a() {
  count+=1;
  quotedItems.push('Extendable 40-45-48');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#isotankAddBin').click(function a() {
  count+=1;
  quotedItems.push('Isotank');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#superSliderAddBin').click(function b() {
  count+=1;
  quotedItems.push('Super Slider');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#comboCCAddBin').click(function c() {
  count+=1;
  quotedItems.push('Container Chassis Combo');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#carrierAddBin').click(function d() {
  count+=1;
  quotedItems.push('Carrier');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#thermoKingAddBin').click(function e() {
  count+=1;
  quotedItems.push('Thermo King');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#amidaAddBin').click(function f() {
  count+=1;
  quotedItems.push('Amida');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#steelAddBin').click(function g() {
  count+=1;
  quotedItems.push('Flatbed Steel');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#comboFAddBin').click(function h() {
  count+=1;
  quotedItems.push('Flatbed Combo');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#aluminumAddBin').click(function i() {
  count+=1;
  quotedItems.push('Flatbed Aluminum');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#detatchNeckAddBin').click(function j() {
  count+=1;
  quotedItems.push('Detatch Neck');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#rearLoadingAddBin').click(function j() {
  count+=1;
  quotedItems.push('Rear Loading');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#singleAxleAddBin').click(function l() {
  count+=1;
  quotedItems.push('Single Axle');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#doubleAxleAddBin').click(function m() {
  count+=1;
  quotedItems.push('Double Axle');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#dryVanAddBin').click(function n() {
  count+=1;
  quotedItems.push('Dry Van');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#reeferVanAddBin').click(function o() {
  count+=1;
  quotedItems.push('Reefer Van');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#thirtyPlugAddBin').click(function p() {
  count+=1;
  quotedItems.push('30 Plug');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#fourtyFivePlugAddBin').click(function q() {
  count+=1;
  quotedItems.push('45 Plug');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#twentyFtCAddBin').click(function r() {
  count+=1;
  quotedItems.push('Container 20Ft');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#fourtyFtCAddBin').click(function s() {
  count+=1;
  quotedItems.push('Container 40Ft');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#fourtyFiveCAddBin').click(function t() {
  count+=1;
  quotedItems.push('Container 45Ft');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#reeferContainersAddBin').click(function u() {
  count+=1;
  quotedItems.push('Reefer Containers (20,40,45Ft)');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#frightlinerAddBin').click(function v() {
  count+=1;
  quotedItems.push('Frightliner Truck Fleet');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#internationalAddBin').click(function v() {
  count+=1;
  quotedItems.push('International Truck Fleet');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#mackAddBin').click(function v() {
  count+=1;
  quotedItems.push('Mack Truck Fleet');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#volvoAddBin').click(function v() {
  count+=1;
  quotedItems.push('Volvo Truck Fleet');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#reeferUnitsOnlyAddBin').click(function w() {
  count+=1;
  quotedItems.push('Reefer Units Only');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#towTouchAddBin').click(function x() {
  count+=1;
  quotedItems.push('Tow Truck Crane For 5th Weel');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#cbsAddBin').click(function y() {
  count+=1;
  quotedItems.push('(Chains, Binders, and Straps)');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#gensetsSPAddBin').click(function z() {
  count+=1;
  quotedItems.push('Gensets Spare Parts');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#chassisSPAddBin').click(function aa() {
  count+=1;
  quotedItems.push('Chassis Spare Parts');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#reeferSPAddBin').click(function ab() {
  count+=1;
  quotedItems.push('Reefer Spare Parts');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#gensetRepairAddBin').click(function a() {
  count+=1;
  quotedItems.push('Genset Repair');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#chassisRepairAddBin').click(function a() {
  count+=1;
  quotedItems.push('Chassis Reapair');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('#trailerRepairAddBin').click(function a() {
  count+=1;
  quotedItems.push('Trailer Reapir');
  if (count>10) {
    $('#quotedImg').attr('src', quotedAmt[10]);
  }
  else {
    $('#quotedImg').attr('src', quotedAmt[count]);
  }
  });
// division
$('.itemAdded').click(function a() {
  alert("Item added to bin.");
})
$('.emailSent').click(function a() {
  var emailContent=$('#id_email').val()
  alert("Email has successfully been sent to ProTech Industries");
})
setInterval(function () {

},100000)
