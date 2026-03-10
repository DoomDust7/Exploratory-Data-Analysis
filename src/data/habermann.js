// Habermann Cancer Survival Dataset — UCI ML Repository (306 records)
// age, year, nodes, survival (1=survived 5+yrs, 2=died within 5yrs)

export const rawData = [
  {age:30,year:64,nodes:1,survival:1},{age:30,year:62,nodes:3,survival:1},{age:30,year:65,nodes:0,survival:1},
  {age:31,year:59,nodes:2,survival:1},{age:31,year:65,nodes:4,survival:1},{age:33,year:58,nodes:10,survival:1},
  {age:33,year:60,nodes:0,survival:1},{age:34,year:59,nodes:0,survival:2},{age:34,year:66,nodes:9,survival:2},
  {age:34,year:58,nodes:30,survival:1},{age:34,year:60,nodes:1,survival:1},{age:34,year:61,nodes:10,survival:1},
  {age:34,year:67,nodes:7,survival:1},{age:34,year:60,nodes:0,survival:1},{age:35,year:64,nodes:13,survival:1},
  {age:35,year:63,nodes:0,survival:1},{age:36,year:60,nodes:1,survival:1},{age:36,year:69,nodes:0,survival:1},
  {age:37,year:60,nodes:0,survival:1},{age:37,year:63,nodes:0,survival:1},{age:37,year:58,nodes:0,survival:1},
  {age:37,year:59,nodes:6,survival:1},{age:37,year:60,nodes:15,survival:1},{age:37,year:63,nodes:0,survival:1},
  {age:38,year:69,nodes:21,survival:2},{age:38,year:59,nodes:2,survival:1},{age:38,year:60,nodes:0,survival:1},
  {age:38,year:60,nodes:0,survival:1},{age:38,year:62,nodes:3,survival:1},{age:38,year:64,nodes:1,survival:1},
  {age:38,year:66,nodes:0,survival:1},{age:38,year:66,nodes:11,survival:1},{age:38,year:60,nodes:1,survival:1},
  {age:38,year:67,nodes:5,survival:1},{age:39,year:66,nodes:0,survival:2},{age:39,year:63,nodes:0,survival:1},
  {age:39,year:67,nodes:0,survival:1},{age:39,year:58,nodes:0,survival:1},{age:39,year:59,nodes:2,survival:1},
  {age:39,year:63,nodes:4,survival:1},{age:40,year:58,nodes:2,survival:1},{age:40,year:58,nodes:0,survival:1},
  {age:40,year:65,nodes:0,survival:1},{age:41,year:60,nodes:23,survival:2},{age:41,year:64,nodes:0,survival:2},
  {age:41,year:67,nodes:0,survival:2},{age:41,year:58,nodes:0,survival:1},{age:41,year:59,nodes:8,survival:1},
  {age:41,year:59,nodes:0,survival:1},{age:41,year:64,nodes:0,survival:1},{age:41,year:69,nodes:8,survival:1},
  {age:41,year:65,nodes:0,survival:1},{age:41,year:65,nodes:0,survival:1},{age:42,year:69,nodes:1,survival:2},
  {age:42,year:59,nodes:0,survival:2},{age:42,year:58,nodes:0,survival:1},{age:42,year:60,nodes:1,survival:1},
  {age:42,year:59,nodes:2,survival:1},{age:42,year:61,nodes:4,survival:1},{age:42,year:62,nodes:20,survival:1},
  {age:42,year:65,nodes:0,survival:1},{age:42,year:63,nodes:1,survival:1},{age:43,year:58,nodes:52,survival:2},
  {age:43,year:59,nodes:2,survival:2},{age:43,year:64,nodes:0,survival:2},{age:43,year:64,nodes:0,survival:2},
  {age:43,year:63,nodes:14,survival:1},{age:43,year:64,nodes:2,survival:1},{age:43,year:64,nodes:3,survival:1},
  {age:43,year:60,nodes:0,survival:1},{age:43,year:63,nodes:2,survival:1},{age:43,year:65,nodes:0,survival:1},
  {age:43,year:66,nodes:4,survival:1},{age:44,year:64,nodes:6,survival:2},{age:44,year:58,nodes:9,survival:2},
  {age:44,year:63,nodes:19,survival:2},{age:44,year:61,nodes:0,survival:1},{age:44,year:63,nodes:1,survival:1},
  {age:44,year:61,nodes:0,survival:1},{age:44,year:67,nodes:16,survival:1},{age:45,year:65,nodes:6,survival:2},
  {age:45,year:66,nodes:0,survival:2},{age:45,year:67,nodes:1,survival:2},{age:45,year:60,nodes:0,survival:1},
  {age:45,year:67,nodes:0,survival:1},{age:45,year:59,nodes:14,survival:1},{age:45,year:64,nodes:0,survival:1},
  {age:45,year:68,nodes:0,survival:1},{age:45,year:67,nodes:1,survival:1},{age:46,year:58,nodes:2,survival:2},
  {age:46,year:69,nodes:3,survival:2},{age:46,year:62,nodes:5,survival:2},{age:46,year:65,nodes:20,survival:2},
  {age:46,year:62,nodes:0,survival:1},{age:46,year:58,nodes:3,survival:1},{age:46,year:63,nodes:0,survival:1},
  {age:47,year:63,nodes:23,survival:2},{age:47,year:62,nodes:0,survival:2},{age:47,year:65,nodes:0,survival:2},
  {age:47,year:61,nodes:0,survival:1},{age:47,year:63,nodes:6,survival:1},{age:47,year:66,nodes:0,survival:1},
  {age:47,year:67,nodes:0,survival:1},{age:47,year:58,nodes:3,survival:1},{age:47,year:60,nodes:4,survival:1},
  {age:47,year:68,nodes:4,survival:1},{age:47,year:66,nodes:12,survival:1},{age:48,year:58,nodes:11,survival:2},
  {age:48,year:58,nodes:11,survival:2},{age:48,year:67,nodes:7,survival:2},{age:48,year:61,nodes:8,survival:1},
  {age:48,year:62,nodes:2,survival:1},{age:48,year:64,nodes:0,survival:1},{age:48,year:66,nodes:0,survival:1},
  {age:49,year:63,nodes:0,survival:2},{age:49,year:64,nodes:10,survival:2},{age:49,year:61,nodes:1,survival:1},
  {age:49,year:62,nodes:0,survival:1},{age:49,year:66,nodes:0,survival:1},{age:49,year:60,nodes:1,survival:1},
  {age:49,year:62,nodes:1,survival:1},{age:49,year:63,nodes:3,survival:1},{age:49,year:61,nodes:0,survival:1},
  {age:49,year:67,nodes:1,survival:1},{age:50,year:63,nodes:13,survival:2},{age:50,year:64,nodes:0,survival:2},
  {age:50,year:59,nodes:0,survival:1},{age:50,year:61,nodes:6,survival:1},{age:50,year:61,nodes:0,survival:1},
  {age:50,year:63,nodes:1,survival:1},{age:50,year:58,nodes:1,survival:1},{age:50,year:59,nodes:2,survival:1},
  {age:50,year:61,nodes:0,survival:1},{age:50,year:64,nodes:0,survival:1},{age:50,year:65,nodes:4,survival:1},
  {age:50,year:66,nodes:1,survival:1},{age:51,year:59,nodes:13,survival:2},{age:51,year:59,nodes:3,survival:2},
  {age:51,year:64,nodes:7,survival:1},{age:51,year:59,nodes:1,survival:1},{age:51,year:65,nodes:0,survival:1},
  {age:51,year:66,nodes:1,survival:1},{age:52,year:69,nodes:3,survival:2},{age:52,year:59,nodes:2,survival:2},
  {age:52,year:62,nodes:3,survival:2},{age:52,year:66,nodes:4,survival:2},{age:52,year:61,nodes:0,survival:1},
  {age:52,year:63,nodes:4,survival:1},{age:52,year:69,nodes:0,survival:1},{age:52,year:60,nodes:4,survival:1},
  {age:52,year:60,nodes:5,survival:1},{age:52,year:62,nodes:0,survival:1},{age:52,year:62,nodes:1,survival:1},
  {age:52,year:64,nodes:0,survival:1},{age:52,year:65,nodes:0,survival:1},{age:52,year:68,nodes:0,survival:1},
  {age:53,year:58,nodes:4,survival:2},{age:53,year:65,nodes:1,survival:2},{age:53,year:59,nodes:3,survival:2},
  {age:53,year:60,nodes:9,survival:2},{age:53,year:63,nodes:24,survival:2},{age:53,year:65,nodes:12,survival:2},
  {age:53,year:58,nodes:1,survival:1},{age:53,year:60,nodes:1,survival:1},{age:53,year:60,nodes:2,survival:1},
  {age:53,year:61,nodes:1,survival:1},{age:53,year:63,nodes:0,survival:1},{age:54,year:60,nodes:11,survival:2},
  {age:54,year:65,nodes:23,survival:2},{age:54,year:65,nodes:5,survival:2},{age:54,year:68,nodes:7,survival:2},
  {age:54,year:59,nodes:7,survival:1},{age:54,year:60,nodes:3,survival:1},{age:54,year:66,nodes:0,survival:1},
  {age:54,year:67,nodes:46,survival:1},{age:54,year:62,nodes:0,survival:1},{age:54,year:69,nodes:7,survival:1},
  {age:54,year:63,nodes:19,survival:1},{age:54,year:58,nodes:1,survival:1},{age:54,year:62,nodes:0,survival:1},
  {age:55,year:63,nodes:6,survival:2},{age:55,year:68,nodes:15,survival:2},{age:55,year:58,nodes:1,survival:1},
  {age:55,year:58,nodes:0,survival:1},{age:55,year:58,nodes:1,survival:1},{age:55,year:66,nodes:18,survival:1},
  {age:55,year:66,nodes:0,survival:1},{age:55,year:69,nodes:3,survival:1},{age:55,year:69,nodes:22,survival:1},
  {age:55,year:67,nodes:1,survival:1},{age:56,year:65,nodes:9,survival:2},{age:56,year:66,nodes:3,survival:2},
  {age:56,year:60,nodes:0,survival:1},{age:56,year:66,nodes:2,survival:1},{age:56,year:66,nodes:1,survival:1},
  {age:56,year:67,nodes:0,survival:1},{age:56,year:60,nodes:0,survival:1},{age:57,year:61,nodes:5,survival:2},
  {age:57,year:62,nodes:14,survival:2},{age:57,year:64,nodes:1,survival:2},{age:57,year:64,nodes:9,survival:1},
  {age:57,year:69,nodes:0,survival:1},{age:57,year:61,nodes:0,survival:1},{age:57,year:62,nodes:0,survival:1},
  {age:57,year:63,nodes:0,survival:1},{age:57,year:64,nodes:0,survival:1},{age:57,year:64,nodes:0,survival:1},
  {age:57,year:67,nodes:0,survival:1},{age:58,year:59,nodes:0,survival:1},{age:58,year:60,nodes:3,survival:1},
  {age:58,year:61,nodes:1,survival:1},{age:58,year:67,nodes:0,survival:1},{age:58,year:58,nodes:0,survival:1},
  {age:58,year:58,nodes:3,survival:1},{age:58,year:61,nodes:2,survival:1},{age:59,year:62,nodes:35,survival:2},
  {age:59,year:60,nodes:0,survival:1},{age:59,year:63,nodes:0,survival:1},{age:59,year:64,nodes:1,survival:1},
  {age:59,year:64,nodes:4,survival:1},{age:59,year:64,nodes:0,survival:1},{age:59,year:64,nodes:7,survival:1},
  {age:59,year:67,nodes:3,survival:1},{age:60,year:59,nodes:17,survival:2},{age:60,year:65,nodes:0,survival:2},
  {age:60,year:61,nodes:1,survival:1},{age:60,year:67,nodes:2,survival:1},{age:60,year:61,nodes:25,survival:1},
  {age:60,year:64,nodes:0,survival:1},{age:61,year:62,nodes:5,survival:2},{age:61,year:65,nodes:0,survival:2},
  {age:61,year:68,nodes:1,survival:2},{age:61,year:59,nodes:0,survival:1},{age:61,year:59,nodes:0,survival:1},
  {age:61,year:64,nodes:0,survival:1},{age:61,year:65,nodes:8,survival:1},{age:61,year:68,nodes:0,survival:1},
  {age:61,year:59,nodes:0,survival:1},{age:62,year:59,nodes:13,survival:2},{age:62,year:58,nodes:0,survival:2},
  {age:62,year:65,nodes:19,survival:2},{age:62,year:62,nodes:6,survival:1},{age:62,year:66,nodes:0,survival:1},
  {age:62,year:66,nodes:0,survival:1},{age:62,year:58,nodes:0,survival:1},{age:63,year:60,nodes:1,survival:2},
  {age:63,year:61,nodes:0,survival:1},{age:63,year:62,nodes:0,survival:1},{age:63,year:63,nodes:0,survival:1},
  {age:63,year:63,nodes:0,survival:1},{age:63,year:66,nodes:0,survival:1},{age:63,year:61,nodes:9,survival:1},
  {age:63,year:61,nodes:28,survival:1},{age:64,year:58,nodes:0,survival:1},{age:64,year:65,nodes:22,survival:1},
  {age:64,year:66,nodes:0,survival:1},{age:64,year:61,nodes:0,survival:1},{age:64,year:68,nodes:0,survival:1},
  {age:65,year:58,nodes:0,survival:2},{age:65,year:61,nodes:2,survival:2},{age:65,year:62,nodes:22,survival:2},
  {age:65,year:66,nodes:15,survival:2},{age:65,year:58,nodes:0,survival:1},{age:65,year:64,nodes:0,survival:1},
  {age:65,year:67,nodes:0,survival:1},{age:65,year:59,nodes:2,survival:1},{age:65,year:64,nodes:0,survival:1},
  {age:65,year:67,nodes:1,survival:1},{age:66,year:58,nodes:0,survival:2},{age:66,year:61,nodes:13,survival:2},
  {age:66,year:58,nodes:0,survival:1},{age:66,year:58,nodes:1,survival:1},{age:66,year:68,nodes:0,survival:1},
  {age:67,year:64,nodes:8,survival:2},{age:67,year:63,nodes:1,survival:2},{age:67,year:66,nodes:0,survival:1},
  {age:67,year:66,nodes:0,survival:1},{age:67,year:61,nodes:0,survival:1},{age:67,year:65,nodes:0,survival:1},
  {age:68,year:67,nodes:0,survival:1},{age:68,year:68,nodes:0,survival:1},{age:69,year:67,nodes:8,survival:2},
  {age:69,year:60,nodes:0,survival:1},{age:69,year:65,nodes:0,survival:1},{age:69,year:66,nodes:0,survival:1},
  {age:70,year:58,nodes:0,survival:2},{age:70,year:58,nodes:4,survival:2},{age:70,year:66,nodes:14,survival:1},
  {age:70,year:67,nodes:0,survival:1},{age:70,year:68,nodes:0,survival:1},{age:70,year:59,nodes:8,survival:1},
  {age:70,year:63,nodes:0,survival:1},{age:71,year:68,nodes:2,survival:1},{age:72,year:63,nodes:0,survival:2},
  {age:72,year:58,nodes:0,survival:1},{age:72,year:64,nodes:0,survival:1},{age:72,year:67,nodes:3,survival:1},
  {age:73,year:62,nodes:0,survival:1},{age:73,year:68,nodes:0,survival:1},{age:74,year:65,nodes:3,survival:2},
  {age:74,year:63,nodes:0,survival:1},{age:75,year:62,nodes:1,survival:1},{age:76,year:67,nodes:0,survival:1},
  {age:77,year:65,nodes:3,survival:1},{age:78,year:65,nodes:1,survival:2},{age:83,year:58,nodes:2,survival:2},
];

export const survived = rawData.filter(d => d.survival === 1);
export const died = rawData.filter(d => d.survival === 2);

export function buildAgeDistribution() {
  const bins = [];
  for (let a = 30; a < 85; a += 5) {
    const label = `${a}-${a + 4}`;
    const s = survived.filter(d => d.age >= a && d.age < a + 5).length;
    const d = died.filter(d => d.age >= a && d.age < a + 5).length;
    bins.push({ age: label, survived: s, died: d, total: s + d });
  }
  return bins;
}

export function buildYearDistribution() {
  const years = [...new Set(rawData.map(d => d.year))].sort();
  return years.map(yr => ({
    year: `'${yr}`,
    survived: survived.filter(d => d.year === yr).length,
    died: died.filter(d => d.year === yr).length,
  }));
}

export function buildNodesDistribution() {
  const groups = [
    { label: '0 nodes', min: 0, max: 0 },
    { label: '1–3 nodes', min: 1, max: 3 },
    { label: '4–9 nodes', min: 4, max: 9 },
    { label: '10+ nodes', min: 10, max: 999 },
  ];
  return groups.map(g => ({
    group: g.label,
    survived: survived.filter(d => d.nodes >= g.min && d.nodes <= g.max).length,
    died: died.filter(d => d.nodes >= g.min && d.nodes <= g.max).length,
  }));
}

export const stats = {
  total: rawData.length,
  survived: survived.length,
  died: died.length,
  survivalRate: ((survived.length / rawData.length) * 100).toFixed(1),
  avgAgeSurvived: (survived.reduce((s, d) => s + d.age, 0) / survived.length).toFixed(1),
  avgAgeDied: (died.reduce((s, d) => s + d.age, 0) / died.length).toFixed(1),
  zeroNodesSurvivalRate: (
    (survived.filter(d => d.nodes === 0).length /
      rawData.filter(d => d.nodes === 0).length) * 100
  ).toFixed(1),
};
