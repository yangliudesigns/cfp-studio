export const images = Array.from({ length: 104 }, (_, index) => {
  const id = index + 1;
  const paddedIndex = String(id).padStart(3, '0');
  return {
    id,
    src: new URL(`./${paddedIndex}.webp`, import.meta.url).href,
    alt: `Image ${id}`,
  };
});

// export const images = [
//   {
//     id: 1,
//     src: new URL('./001.webp', import.meta.url).href,
//     alt: 'Image 1',
//   },
//   {
//     id: 2,
//     src: new URL('./002.webp', import.meta.url).href,
//     alt: 'Image 2',
//   },
//   {
//     id: 3,
//     src: new URL('./003.webp', import.meta.url).href,
//     alt: 'Image 3',
//   },
//   {
//     id: 4,
//     src: new URL('./004.webp', import.meta.url).href,
//     alt: 'Image 4',
//   },
//   {
//     id: 5,
//     src: new URL('./005.webp', import.meta.url).href,
//     alt: 'Image 5',
//   },
//   {
//     id: 6,
//     src: new URL('./006.webp', import.meta.url).href,
//     alt: 'Image 6',
//   },
//   {
//     id: 7,
//     src: new URL('./007.webp', import.meta.url).href,
//     alt: 'Image 7',
//   },
//   {
//     id: 8,
//     src: new URL('./008.webp', import.meta.url).href,
//     alt: 'Image 8',
//   },
//   {
//     id: 9,
//     src: new URL('./009.webp', import.meta.url).href,
//     alt: 'Image 9',
//   },
//   {
//     id: 10,
//     src: new URL('./010.webp', import.meta.url).href,
//     alt: 'Image 10',
//   },
//   {
//     id: 11,
//     src: new URL('./011.webp', import.meta.url).href,
//     alt: 'Image 11',
//   },
//   {
//     id: 12,
//     src: new URL('./012.webp', import.meta.url).href,
//     alt: 'Image 12',
//   },
//   {
//     id: 13,
//     src: new URL('./013.webp', import.meta.url).href,
//     alt: 'Image 13',
//   },
//   {
//     id: 14,
//     src: new URL('./014.webp', import.meta.url).href,
//     alt: 'Image 14',
//   },
//   {
//     id: 15,
//     src: new URL('./015.webp', import.meta.url).href,
//     alt: 'Image 15',
//   },
//   {
//     id: 16,
//     src: new URL('./016.webp', import.meta.url).href,
//     alt: 'Image 16',
//   },
//   {
//     id: 17,
//     src: new URL('./017.webp', import.meta.url).href,
//     alt: 'Image 17',
//   },
//   {
//     id: 18,
//     src: new URL('./018.webp', import.meta.url).href,
//     alt: 'Image 18',
//   },
//   {
//     id: 19,
//     src: new URL('./019.webp', import.meta.url).href,
//     alt: 'Image 19',
//   },
//   {
//     id: 20,
//     src: new URL('./020.webp', import.meta.url).href,
//     alt: 'Image 20',
//   },
//   {
//     id: 21,
//     src: new URL('./021.webp', import.meta.url).href,
//     alt: 'Image 21',
//   },
//   {
//     id: 22,
//     src: new URL('./022.webp', import.meta.url).href,
//     alt: 'Image 22',
//   },
//   {
//     id: 23,
//     src: new URL('./023.webp', import.meta.url).href,
//     alt: 'Image 23',
//   },
//   {
//     id: 24,
//     src: new URL('./024.webp', import.meta.url).href,
//     alt: 'Image 24',
//   },
//   {
//     id: 25,
//     src: new URL('./025.webp', import.meta.url).href,
//     alt: 'Image 25',
//   },
//   {
//     id: 26,
//     src: new URL('./026.webp', import.meta.url).href,
//     alt: 'Image 26',
//   },
//   {
//     id: 27,
//     src: new URL('./027.webp', import.meta.url).href,
//     alt: 'Image 27',
//   },
//   {
//     id: 28,
//     src: new URL('./028.webp', import.meta.url).href,
//     alt: 'Image 28',
//   },
//   {
//     id: 29,
//     src: new URL('./029.webp', import.meta.url).href,
//     alt: 'Image 29',
//   },
//   {
//     id: 30,
//     src: new URL('./030.webp', import.meta.url).href,
//     alt: 'Image 30',
//   },
//   {
//     id: 31,
//     src: new URL('./031.webp', import.meta.url).href,
//     alt: 'Image 31',
//   },
//   {
//     id: 32,
//     src: new URL('./032.webp', import.meta.url).href,
//     alt: 'Image 32',
//   },
//   {
//     id: 33,
//     src: new URL('./033.webp', import.meta.url).href,
//     alt: 'Image 33',
//   },
//   {
//     id: 34,
//     src: new URL('./034.webp', import.meta.url).href,
//     alt: 'Image 34',
//   },
//   {
//     id: 35,
//     src: new URL('./035.webp', import.meta.url).href,
//     alt: 'Image 35',
//   },
//   {
//     id: 36,
//     src: new URL('./036.webp', import.meta.url).href,
//     alt: 'Image 36',
//   },
//   {
//     id: 37,
//     src: new URL('./037.webp', import.meta.url).href,
//     alt: 'Image 37',
//   },
//   {
//     id: 38,
//     src: new URL('./038.webp', import.meta.url).href,
//     alt: 'Image 38',
//   },
//   {
//     id: 39,
//     src: new URL('./039.webp', import.meta.url).href,
//     alt: 'Image 39',
//   },
//   {
//     id: 40,
//     src: new URL('./040.webp', import.meta.url).href,
//     alt: 'Image 40',
//   },
//   {
//     id: 41,
//     src: new URL('./041.webp', import.meta.url).href,
//     alt: 'Image 41',
//   },
//   {
//     id: 42,
//     src: new URL('./042.webp', import.meta.url).href,
//     alt: 'Image 42',
//   },
//   {
//     id: 43,
//     src: new URL('./043.webp', import.meta.url).href,
//     alt: 'Image 43',
//   },
//   {
//     id: 44,
//     src: new URL('./044.webp', import.meta.url).href,
//     alt: 'Image 44',
//   },
//   {
//     id: 45,
//     src: new URL('./045.webp', import.meta.url).href,
//     alt: 'Image 45',
//   },
//   {
//     id: 46,
//     src: new URL('./046.webp', import.meta.url).href,
//     alt: 'Image 46',
//   },
//   {
//     id: 47,
//     src: new URL('./047.webp', import.meta.url).href,
//     alt: 'Image 47',
//   },
//   {
//     id: 48,
//     src: new URL('./048.webp', import.meta.url).href,
//     alt: 'Image 48',
//   },
//   {
//     id: 49,
//     src: new URL('./049.webp', import.meta.url).href,
//     alt: 'Image 49',
//   },
//   {
//     id: 50,
//     src: new URL('./050.webp', import.meta.url).href,
//     alt: 'Image 50',
//   },
//   {
//     id: 51,
//     src: new URL('./051.webp', import.meta.url).href,
//     alt: 'Image 51',
//   },
//   {
//     id: 52,
//     src: new URL('./052.webp', import.meta.url).href,
//     alt: 'Image 52',
//   },
//   {
//     id: 53,
//     src: new URL('./053.webp', import.meta.url).href,
//     alt: 'Image 53',
//   },
//   {
//     id: 54,
//     src: new URL('./054.webp', import.meta.url).href,
//     alt: 'Image 54',
//   },
//   {
//     id: 55,
//     src: new URL('./055.webp', import.meta.url).href,
//     alt: 'Image 55',
//   },
//   {
//     id: 56,
//     src: new URL('./056.webp', import.meta.url).href,
//     alt: 'Image 56',
//   },
//   {
//     id: 57,
//     src: new URL('./057.webp', import.meta.url).href,
//     alt: 'Image 57',
//   },
//   {
//     id: 58,
//     src: new URL('./058.webp', import.meta.url).href,
//     alt: 'Image 58',
//   },
//   {
//     id: 59,
//     src: new URL('./059.webp', import.meta.url).href,
//     alt: 'Image 59',
//   },
//   {
//     id: 60,
//     src: new URL('./060.webp', import.meta.url).href,
//     alt: 'Image 60',
//   },
//   {
//     id: 61,
//     src: new URL('./061.webp', import.meta.url).href,
//     alt: 'Image 61',
//   },
//   {
//     id: 62,
//     src: new URL('./062.webp', import.meta.url).href,
//     alt: 'Image 62',
//   },
//   {
//     id: 63,
//     src: new URL('./063.webp', import.meta.url).href,
//     alt: 'Image 63',
//   },
//   {
//     id: 64,
//     src: new URL('./064.webp', import.meta.url).href,
//     alt: 'Image 64',
//   },
//   {
//     id: 65,
//     src: new URL('./065.webp', import.meta.url).href,
//     alt: 'Image 65',
//   },
//   {
//     id: 66,
//     src: new URL('./066.webp', import.meta.url).href,
//     alt: 'Image 66',
//   },
//   {
//     id: 67,
//     src: new URL('./067.webp', import.meta.url).href,
//     alt: 'Image 67',
//   },
//   {
//     id: 68,
//     src: new URL('./068.webp', import.meta.url).href,
//     alt: 'Image 68',
//   },
//   {
//     id: 69,
//     src: new URL('./069.webp', import.meta.url).href,
//     alt: 'Image 69',
//   },
//   {
//     id: 70,
//     src: new URL('./070.webp', import.meta.url).href,
//     alt: 'Image 70',
//   },
//   {
//     id: 71,
//     src: new URL('./071.webp', import.meta.url).href,
//     alt: 'Image 71',
//   },
//   {
//     id: 72,
//     src: new URL('./072.webp', import.meta.url).href,
//     alt: 'Image 72',
//   },
//   {
//     id: 73,
//     src: new URL('./073.webp', import.meta.url).href,
//     alt: 'Image 73',
//   },
//   {
//     id: 74,
//     src: new URL('./074.webp', import.meta.url).href,
//     alt: 'Image 74',
//   },
//   {
//     id: 75,
//     src: new URL('./075.webp', import.meta.url).href,
//     alt: 'Image 75',
//   },
//   {
//     id: 76,
//     src: new URL('./076.webp', import.meta.url).href,
//     alt: 'Image 76',
//   },
//   {
//     id: 77,
//     src: new URL('./077.webp', import.meta.url).href,
//     alt: 'Image 77',
//   },
//   {
//     id: 78,
//     src: new URL('./078.webp', import.meta.url).href,
//     alt: 'Image 78',
//   },
//   {
//     id: 79,
//     src: new URL('./079.webp', import.meta.url).href,
//     alt: 'Image 79',
//   },
//   {
//     id: 80,
//     src: new URL('./080.webp', import.meta.url).href,
//     alt: 'Image 80',
//   },
//   {
//     id: 81,
//     src: new URL('./081.webp', import.meta.url).href,
//     alt: 'Image 81',
//   },
//   {
//     id: 82,
//     src: new URL('./082.webp', import.meta.url).href,
//     alt: 'Image 82',
//   },
//   {
//     id: 83,
//     src: new URL('./083.webp', import.meta.url).href,
//     alt: 'Image 83',
//   },
//   {
//     id: 84,
//     src: new URL('./084.webp', import.meta.url).href,
//     alt: 'Image 84',
//   },
//   {
//     id: 85,
//     src: new URL('./085.webp', import.meta.url).href,
//     alt: 'Image 85',
//   },
//   {
//     id: 86,
//     src: new URL('./086.webp', import.meta.url).href,
//     alt: 'Image 86',
//   },
//   {
//     id: 87,
//     src: new URL('./087.webp', import.meta.url).href,
//     alt: 'Image 87',
//   },
//   {
//     id: 88,
//     src: new URL('./088.webp', import.meta.url).href,
//     alt: 'Image 88',
//   },
//   {
//     id: 89,
//     src: new URL('./089.webp', import.meta.url).href,
//     alt: 'Image 89',
//   },
//   {
//     id: 90,
//     src: new URL('./090.webp', import.meta.url).href,
//     alt: 'Image 90',
//   },
//   {
//     id: 91,
//     src: new URL('./091.webp', import.meta.url).href,
//     alt: 'Image 91',
//   },
//   {
//     id: 92,
//     src: new URL('./092.webp', import.meta.url).href,
//     alt: 'Image 92',
//   },
//   {
//     id: 93,
//     src: new URL('./093.webp', import.meta.url).href,
//     alt: 'Image 93',
//   },
//   {
//     id: 94,
//     src: new URL('./094.webp', import.meta.url).href,
//     alt: 'Image 94',
//   },
//   {
//     id: 95,
//     src: new URL('./095.webp', import.meta.url).href,
//     alt: 'Image 95',
//   },
//   {
//     id: 96,
//     src: new URL('./096.webp', import.meta.url).href,
//     alt: 'Image 96',
//   },
//   {
//     id: 97,
//     src: new URL('./097.webp', import.meta.url).href,
//     alt: 'Image 97',
//   },
//   {
//     id: 98,
//     src: new URL('./098.webp', import.meta.url).href,
//     alt: 'Image 98',
//   },
//   {
//     id: 99,
//     src: new URL('./099.webp', import.meta.url).href,
//     alt: 'Image 99',
//   },
//   {
//     id: 100,
//     src: new URL('./100.webp', import.meta.url).href,
//     alt: 'Image 100',
//   },
//   {
//     id: 101,
//     src: new URL('./101.webp', import.meta.url).href,
//     alt: 'Image 101',
//   },
//   {
//     id: 102,
//     src: new URL('./102.webp', import.meta.url).href,
//     alt: 'Image 102',
//   },
//   {
//     id: 103,
//     src: new URL('./103.webp', import.meta.url).href,
//     alt: 'Image 103',
//   },
//   {
//     id: 104,
//     src: new URL('./104.webp', import.meta.url).href,
//     alt: 'Image 104',
//   },
//   {
//     id: 105,
//     src: new URL('./105.webp', import.meta.url).href,
//     alt: 'Image 105',
//   },
//   {
//     id: 106,
//     src: new URL('./106.webp', import.meta.url).href,
//     alt: 'Image 106',
//   },
//   {
//     id: 107,
//     src: new URL('./107.webp', import.meta.url).href,
//     alt: 'Image 107',
//   },
//   {
//     id: 108,
//     src: new URL('./108.webp', import.meta.url).href,
//     alt: 'Image 108',
//   },
//   {
//     id: 109,
//     src: new URL('./109.webp', import.meta.url).href,
//     alt: 'Image 109',
//   },
//   {
//     id: 110,
//     src: new URL('./110.webp', import.meta.url).href,
//     alt: 'Image 110',
//   },
//   {
//     id: 111,
//     src: new URL('./111.webp', import.meta.url).href,
//     alt: 'Image 111',
//   },
//   {
//     id: 112,
//     src: new URL('./112.webp', import.meta.url).href,
//     alt: 'Image 112',
//   },
// ];
