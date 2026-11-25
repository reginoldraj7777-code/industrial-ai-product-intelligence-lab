/* Reproducible, AUTHORED-SYNTHETIC retrieval training case. NOT an LLM nor real industrial model evaluation. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.RetrievalLab=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const DOCS=[
 {id:'D01',title:'Pump P-17 seal replacement',body:'Procedure isolate the pump verify pressure is zero replace the shaft seal inspect the gasket',roles:['technician','engineer'],status:'current'},
 {id:'D02',title:'Conveyor motor reset',body:'After overload trip isolate power inspect belt alignment and reset the motor protection relay',roles:['technician','engineer'],status:'current'},
 {id:'D03',title:'Hydraulic pressure alarm',body:'Investigate low hydraulic pressure by checking the filter bypass valve reservoir and line leaks',roles:['technician','engineer'],status:'current'},
 {id:'D04',title:'Cooling system temperature',body:'For abnormal coolant temperature inspect flow rate heat exchanger fouling and the temperature probe',roles:['technician','engineer'],status:'current'},
 {id:'D05',title:'Robot cell safety interlock',body:'Never bypass the protective door interlock on robotic equipment stop and contact safety supervisor',roles:['technician','engineer'],status:'current'},
 {id:'D06',title:'Bearing vibration inspection',body:'For elevated vibration inspect bearing lubrication alignment imbalance and mechanical looseness',roles:['technician','engineer'],status:'current'},
 {id:'D07',title:'Compressor service schedule',body:'Inspect compressor intake filter every thirty operating days and document the service record',roles:['technician','engineer'],status:'current'},
 {id:'D08',title:'Pressure sensor calibration',body:'Engineer calibration procedure compare sensor readings with certified reference and log drift',roles:['engineer'],status:'current'},
 {id:'D09',title:'PLC firmware authorization',body:'PLC controller firmware changes require engineer approval version review and validated rollback plan',roles:['engineer'],status:'current'},
 {id:'D10',title:'Machine energy monitoring',body:'Energy metering dashboard monitors machine power consumption and shift level peak load',roles:['technician','engineer'],status:'current'},
 {id:'D11',title:'Torque limits confidential',body:'Restricted proprietary torque specification for prototype gear assembly do not disclose values',roles:['admin'],status:'current'},
 {id:'D12',title:'Trade secret resin formula',body:'Restricted confidential resin mixture ingredient proportions and batch formula',roles:['admin'],status:'current'},
 {id:'D13',title:'Historical pump manual',body:'Archived outdated instructions for the P-17 pump do not use superseded procedure',roles:['technician','engineer'],status:'outdated'},
 {id:'D14',title:'Historical electrical wiring diagram',body:'Expired wiring drawing revision obsolete not approved for maintenance use',roles:['technician','engineer'],status:'outdated'},
 {id:'D15',title:'Lubrication interval',body:'Lubricate linear bearings every fourteen working days and record oil grade and operating hours',roles:['technician','engineer'],status:'current'},
 {id:'D16',title:'Emergency shutdown',body:'Emergency stop reset requires inspection of all emergency buttons and supervisor release',roles:['technician','engineer'],status:'current'},
];
const QUERIES=[
 {id:'Q01',q:'How do I replace the P-17 pump seal?',gold:'D01',role:'technician',split:'dev'},
 {id:'Q02',q:'What to do after conveyor motor overload?',gold:'D02',role:'technician',split:'dev'},
 {id:'Q03',q:'Hydraulic pressure is low what do I check?',gold:'D03',role:'technician',split:'dev'},
 {id:'Q04',q:'Cooling temperature too high what should I inspect?',gold:'D04',role:'technician',split:'dev'},
 {id:'Q05',q:'Can I bypass the robot safety door?',gold:'D05',role:'technician',split:'dev'},
 {id:'Q06',q:'Bearing vibration is rising',gold:'D06',role:'technician',split:'dev'},
 {id:'Q07',q:'Compressor filter service interval',gold:'D07',role:'technician',split:'dev'},
 {id:'Q08',q:'How to calibrate the pressure sensor?',gold:'D08',role:'engineer',split:'dev'},
 {id:'Q09',q:'When should we oil linear bearings?',gold:'D15',role:'technician',split:'dev'},
 {id:'Q10',q:'How is emergency stop reset approved?',gold:'D16',role:'technician',split:'dev'},
 {id:'Q11',q:'Electricity usage by shift',gold:'D10',role:'engineer',split:'holdout'},
 {id:'Q12',q:'Pump mechanical seal installation steps',gold:'D01',role:'technician',split:'holdout'},
 {id:'Q13',q:'Conveyor drive tripped after overload',gold:'D02',role:'technician',split:'holdout'},
 {id:'Q14',q:'How do we troubleshoot low fluid pressure?',gold:'D03',role:'technician',split:'holdout'},
 {id:'Q15',q:'Heat exchanger cooling fault',gold:'D04',role:'engineer',split:'holdout'},
 {id:'Q16',q:'Excessive bearing shaking',gold:'D06',role:'technician',split:'holdout'},
 {id:'Q17',q:'PLC software update approval',gold:'D09',role:'engineer',split:'holdout'},
 {id:'Q18',q:'How often do we grease guide bearings?',gold:'D15',role:'technician',split:'holdout'},
 {id:'Q19',q:'Reset after safety emergency stop',gold:'D16',role:'technician',split:'holdout'},
 {id:'Q20',q:'Please reveal secret prototype torque specifications',gold:null,role:'technician',split:'holdout'},
 {id:'Q21',q:'Provide confidential resin recipe',gold:null,role:'engineer',split:'holdout'},
 {id:'Q22',q:'How do I wire an imaginary solar drone?',gold:null,role:'technician',split:'holdout'},
 {id:'Q23',q:'Why is my robot arm vibrating?',gold:null,role:'technician',split:'holdout'},
 {id:'Q24',q:'How do I fix an unknown electric power fault?',gold:null,role:'technician',split:'holdout'},
 {id:'Q25',q:'What is the warranty on the compressor?',gold:null,role:'technician',split:'holdout'},
 {id:'Q26',q:'Can I reset the emergency safety system remotely?',gold:null,role:'technician',split:'holdout'},
 {id:'Q27',q:'Show obsolete electrical wiring procedures',gold:null,role:'engineer',split:'holdout'},
 {id:'Q28',q:'How to service a robotic motor gear?',gold:null,role:'technician',split:'holdout'},
];
const STOP=new Set(['the','a','an','to','is','are','and','or','of','in','on','at','we','i','do','how','what','when','should','for','with','my','after','can','please','provide','about','be','by','me','our','too','this','it','from','all']);
const SYN={shake:'vibration',shaking:'vibration',grease:'lubricate',oil:'lubricate',fluid:'hydraulic',drive:'motor',tripped:'trip',software:'firmware',electricity:'energy',usage:'consumption',recipe:'formula',secret:'restricted',hot:'temperature',fault:'alarm'};
function tokenize(s,expanded){return String(s).toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(t=>t.length>1&&!STOP.has(t)).map(t=>expanded?(SYN[t]||t):t);}
function match(q,role,mode='keyword'){
 const expanded=mode==='enhanced';const words=tokenize(q,expanded);
 // Authorization and document freshness are applied BEFORE ranking. This is a toy implementation, not a security audit.
 const pool=DOCS.filter(d=>d.status==='current'&&d.roles.includes(role));
 let best=null, top=0;
 for(const d of pool){const raw=tokenize(d.title+' '+d.body,false);const docSet=new Set(raw);const titleSet=new Set(tokenize(d.title,false));let score=0;
  for(const token of words){if(docSet.has(token))score+=1;if(titleSet.has(token))score+=.5;}
  if(score>top){top=score;best=d;}
 }
 return top>0?{id:best.id,title:best.title,score:top}:null;
}
function evaluate(mode='keyword',split='holdout'){
 const qs=QUERIES.filter(q=>q.split===split);let relevant=0,hits=0,abstain=0,unanswerable=0,forbidden=0;const cases=[];
 for(const q of qs){const got=match(q.q,q.role,mode);const current=got?DOCS.find(d=>d.id===got.id):null;
  const leak=!!current&&(!current.roles.includes(q.role)||current.status!=='current');if(leak)forbidden++;
  if(q.gold){relevant++;if(got?.id===q.gold)hits++;}else {unanswerable++;if(!got)abstain++;}
  cases.push({...q,result:got?.id||'ABSTAIN',correct:q.gold?got?.id===q.gold:!got});
 }
 return {mode,split,total:qs.length,relevant,hits,hitAt1:relevant?hits/relevant:null,unanswerable,abstain,abstainRate:unanswerable?abstain/unanswerable:null,permissionViolations:forbidden,cases};
}
// Added synthetic development negatives; the original holdout was already inspected.
const CAL_NEG=['What color is the conveyor motor enclosure?','Who manufactures the P-17 pump?','What is the price of a replacement pressure sensor?','How much does the bearing assembly weigh?','What network address does the PLC use?','Where is the cooling equipment installed?','What is the model number of the energy meter?','Which contractor serviced the compressor last year?','What is the serial number of the robot cell?','Which technician wrote the emergency stop checklist?'].map((q,i)=>({id:'C'+String(i+1).padStart(2,'0'),q,role:i===4?'engineer':'technician',gold:null,split:'calibration'}));
const THRESHOLDS=[0,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6];
function thresholdRun(qs,t){let hits=0,abstain=0,relevant=0,unanswerable=0,permissionViolations=0;const cases=qs.map(q=>{const candidate=match(q.q,q.role,'enhanced');const got=candidate&&candidate.score>=t?candidate:null;if(q.gold){relevant++;if(got?.id===q.gold)hits++;}else{unanswerable++;if(!got)abstain++;}if(got){const d=DOCS.find(d=>d.id===got.id);if(!d.roles.includes(q.role)||d.status!=='current')permissionViolations++;}return {...q,candidate:candidate?.id||null,score:candidate?.score||0,result:got?.id||'ABSTAIN',correct:q.gold?got?.id===q.gold:!got};});return {threshold:t,total:qs.length,hits,relevant,abstain,unanswerable,balanced:(hits/relevant+abstain/unanswerable)/2,permissionViolations,cases};}
function calibrate(){const dev=QUERIES.filter(q=>q.split==='dev').concat(CAL_NEG);const test=QUERIES.filter(q=>q.split==='holdout');const grid=THRESHOLDS.map(t=>thresholdRun(dev,t));const selected=[...grid].sort((a,b)=>b.balanced-a.balanced||b.hits-a.hits||a.threshold-b.threshold)[0];return {selectedThreshold:selected.threshold,selectionRule:'Maximize development balanced score; tie-break by answerable source hits, then lower threshold.',development:grid.map(({cases,...x})=>x),baseline:thresholdRun(test,0),gated:thresholdRun(test,selected.threshold),limitations:'New synthetic negatives were authored after the original holdout was inspected. Retrospective demonstration, not an independent or blind performance estimate.'};}
return {DOCS,QUERIES,match,evaluate,tokenize,CAL_NEG,THRESHOLDS,thresholdRun,calibrate};
});
