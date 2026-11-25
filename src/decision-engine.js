/* Industrial AI Product Strategy Lab — independent educational case study.
   Core calculations are dependency-free and testable in Node and browsers.
   All sample inputs are HYPOTHETICAL, not vendor performance measurements.
*/
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DecisionEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DEFAULT_WEIGHTS = Object.freeze({ fit: 30, quality: 25, integration: 15, economics: 15, readiness: 15 });
  const DEFAULT_CASE = Object.freeze({
    employees: 80, searchesPerDay: 3, workdays: 210,
    minutesBefore: 8, minutesAfter: 5, adoptionPct: 55,
    hourlyValue: 32, setupCost: 18000, annualOperatingCost: 9000,
    requireLocal: false, strictPermissions: true,
    businessPriority: 'Search verified maintenance instructions'
  });
  const OPTIONS = Object.freeze([
    { id:'improve', name:'Improve the existing assistant', short:'Improve existing', category:'Existing stack', deployment:'unknown',
      notes:'Audit retrieval, document versioning, permissions and user experience before buying anything.',
      scores:{fit:4,quality:2,integration:5,economics:5,readiness:4}, source:'Hypothetical customer option; no vendor benchmark' },
    { id:'managed', name:'Managed cloud RAG platform', short:'Managed cloud', category:'Platform alternative', deployment:'cloud',
      notes:'Use a managed enterprise retrieval stack, subject to security and procurement review.',
      scores:{fit:4,quality:3,integration:4,economics:3,readiness:4}, source:'Research archetype; not a claim about a specific vendor' },
    { id:'selfhost', name:'Self-hosted open-weight RAG', short:'Self-hosted', category:'Architecture alternative', deployment:'local',
      notes:'More infrastructure control; customer must evaluate operations, staffing and model quality.',
      scores:{fit:4,quality:3,integration:2,economics:2,readiness:3}, source:'Research archetype; no benchmark' },
    { id:'specialist', name:'Specialist domain-adapted pilot', short:'Domain-adapted', category:'Allinga-aligned pathway', deployment:'local-capable',
      notes:'Explore specialist model adaptation/evaluation and integration, not a priced off-the-shelf Allinga product.',
      scores:{fit:5,quality:4,integration:3,economics:2,readiness:3}, source:'Hypothetical scoring; Allinga capabilities from Fraunhofer public description' },
  ]);
  function finite(x, field) { const n = Number(x); if (!Number.isFinite(n)) throw new Error('Invalid ' + field); return n; }
  function nonnegative(x, field) { const n = finite(x,field); if(n<0) throw new Error('Negative '+field); return n; }
  function clamp(x,a,b){return Math.min(b, Math.max(a,x));}
  function calculateBusinessCase(input) {
    const employees=nonnegative(input.employees,'employees');
    const searchesPerDay=nonnegative(input.searchesPerDay,'searchesPerDay');
    const workdays=nonnegative(input.workdays,'workdays');
    const minutesBefore=nonnegative(input.minutesBefore,'minutesBefore');
    const minutesAfter=nonnegative(input.minutesAfter,'minutesAfter');
    const adoptionPct=finite(input.adoptionPct,'adoptionPct');
    const hourlyValue=nonnegative(input.hourlyValue,'hourlyValue');
    const setupCost=nonnegative(input.setupCost,'setupCost');
    const annualOperatingCost=nonnegative(input.annualOperatingCost,'annualOperatingCost');
    if (adoptionPct<0||adoptionPct>100) throw new Error('Adoption must be from 0 to 100');
    const annualSearches=employees*searchesPerDay*workdays;
    const grossHours=annualSearches*Math.max(0,minutesBefore-minutesAfter)/60;
    const adoptedHours=grossHours*(adoptionPct/100);
    const opportunityValue=adoptedHours*hourlyValue;
    const totalFirstYearCost=setupCost+annualOperatingCost;
    const netFirstYearValue=opportunityValue-totalFirstYearCost;
    const roiPct=totalFirstYearCost===0 ? null : 100*netFirstYearValue/totalFirstYearCost;
    return { annualSearches,grossHours,adoptedHours,opportunityValue,totalFirstYearCost,netFirstYearValue,roiPct,
      lowValue:opportunityValue*0.5,highValue:opportunityValue*1.25,
      breakEvenMinutes: annualSearches*adoptionPct*hourlyValue===0 ? null : totalFirstYearCost*60*100/(annualSearches*adoptionPct*hourlyValue),
      notice:'Illustrative productive-capacity value, NOT measured cash savings, realized profit or verified ROI.' };
  }
  function validateWeights(weights){ const vals=Object.keys(DEFAULT_WEIGHTS).map(k=>nonnegative(weights[k]??0,k)); const sum=vals.reduce((a,b)=>a+b,0); if(Math.abs(sum-100)>0.01) throw new Error('Weights must add to 100%; currently '+sum+'%'); return true; }
  function eligibility(option, controls={}) {
    // An unknown status is a review hold, not a pass. Local-capable still needs customer-specific verification.
    if(controls.requireLocal && option.deployment==='cloud') return {status:'excluded',reason:'Cloud-only option conflicts with required local deployment.'};
    if(controls.requireLocal && option.deployment==='unknown') return {status:'hold',reason:'Deployment of existing system is not established.'};
    if(controls.strictPermissions) return {status:'hold',reason:'Mandatory document-level permissions have NOT been independently tested on this customer environment; evidence hold.'};
    if(controls.requireLocal && option.deployment==='local-capable') return {status:'conditional',reason:'Local capability exists in principle; customer-specific approval still required.'};
    return {status:'conditional',reason:'Eligibility and actual performance require customer-specific validation.'};
  }
  function scoreOptions(options=OPTIONS,weights=DEFAULT_WEIGHTS,controls={}) {
    validateWeights(weights);
    return options.map(option=>{
      const gate=eligibility(option,controls);
      let weighted=0;
      for(const k of Object.keys(DEFAULT_WEIGHTS)){
        const value=finite(option.scores[k],k);
        if(value<1||value>5) throw new Error(k+' score outside 1..5');
        weighted+=value*weights[k]/100;
      }
      return {...option,score:Math.round(weighted*100)/100,gate};
    }).sort((a,b)=>b.score-a.score);
  }
  function makeDecision(input,weights=DEFAULT_WEIGHTS,options=OPTIONS) {
    const ranked=scoreOptions(options,weights,input);
    const candidates=ranked.filter(x=>x.gate.status!=='excluded'&&x.gate.status!=='hold');
    const excluded=ranked.filter(x=>x.gate.status==='excluded');
    const hold=ranked.filter(x=>x.gate.status==='hold');
    return {ranked,candidates,excluded,hold,recommendation:
      'Do not select a final vendor or claim product superiority from illustrative scores. Permission requirements require verified access-control tests; untested candidates stay on EVIDENCE HOLD. Confirm deployment, collect quotations and evaluate all shortlisted approaches on the SAME representative customer tasks.'};
  }
  function euros(n){return Number(n).toLocaleString('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0});}
  return {DEFAULT_CASE,DEFAULT_WEIGHTS,OPTIONS,calculateBusinessCase,validateWeights,eligibility,scoreOptions,makeDecision,euros,clamp};
});
