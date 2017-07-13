'use strict';

describe('pos', () => {

    it('There is no same inputs', () => {
        const inputs= [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2.5',
            'ITEM000005',
            'ITEM000005-2',
        ];
        const tags = [
            {
                barcode: 'ITEM000001',
                count: 5
            },
            {
                barcode: 'ITEM000003',
                count: 2.5
            },
            {
                barcode: 'ITEM000005',
                count: 3
            },
        ];
        const result = SameInputs(inputs);
        expect(tags).toEqual(result);

    });


    it('MathItems', () => {
        const tags = [
            {
                barcode: 'ITEM000001',
                count: 5
            },
            {
                barcode: 'ITEM000003',
                count: 2.5
            },
            {
                barcode: 'ITEM000005',
                count: 3
            },
        ];
        const inputs = [
            {
                barcode: 'ITEM000001',
                count:5,
                name: '雪碧',
                unit: '瓶',
                price: 3.00
            },
            {
                barcode: 'ITEM000003',
                count:2.5,
                unit: '斤',
                name: '荔枝',
                price: 15.00
            },
            {
                barcode: 'ITEM000005',
                count:3,
                name: '方便面',
                unit: '袋',
                price: 4.50
            }
        ];

        const result = MatchItems(tags);
        expect(inputs).toEqual(result);

    });

    it('processInput', () => {
        const inputs2 = [
            {
                barcode: 'ITEM000001',
                count:5,
                name: '雪碧',
                unit: '瓶',
                price: 3.00
            },
            {
                barcode: 'ITEM000003',
                count:2.5,
                unit: '斤',
                name: '荔枝',
                price: 15.00
            },
            {
                barcode: 'ITEM000005',
                count:3,
                name: '方便面',
                unit: '袋',
                price: 4.50
            }
        ];
        const inputs = [
            {
                barcode: 'ITEM000001',
                count:5,
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                subtotal:15,
                subTotal:15
            },
            {
                barcode: 'ITEM000003',
                count:2.5,
                unit: '斤',
                name: '荔枝',
                price: 15.00,
                subtotal:37.5,
                subTotal:37.5
            },
            {
                barcode: 'ITEM000005',
                count:3,
                name: '方便面',
                unit: '袋',
                price: 4.50,
                subtotal:13.5,
                subTotal:13.5
            }
        ];

        const result = processInput(inputs2);
        expect(inputs).toEqual(result);

    });


    it('MatchPromotion', () => {
        const recpitItems2 = [
            {
                barcode: 'ITEM000001',
                count:5,
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                subtotal:15,
                subTotal:12
            },
            {
                barcode: 'ITEM000003',
                count:2.5,
                unit: '斤',
                name: '荔枝',
                price: 15.00,
                subtotal:37.5,
                subTotal:37.5
            },
            {
                barcode: 'ITEM000005',
                count:3,
                name: '方便面',
                unit: '袋',
                price: 4.50,
                subtotal:13.5,
                subTotal:9
            }
        ];
        const receipItems = [
            {
                barcode: 'ITEM000001',
                count:5,
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                subtotal:15,
                subTotal:15
            },
            {
                barcode: 'ITEM000003',
                count:2.5,
                unit: '斤',
                name: '荔枝',
                price: 15.00,
                subtotal:37.5,
                subTotal:37.5
            },
            {
                barcode: 'ITEM000005',
                count:3,
                name: '方便面',
                unit: '袋',
                price: 4.50,
                subtotal:13.5,
                subTotal:13.5
            }
        ];

        const result = MatchPromotion(receipItems);
        expect( recpitItems2 ).toEqual(result);

    });


    it('should print text', () => {

        const tags = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2.5',
            'ITEM000005',
            'ITEM000005-2',
        ];

        spyOn(console, 'log');

        printReceipt(tags);

        const expectText = `***<没钱赚商店>收据***
名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
名称：荔枝，数量：2.5斤，单价：15.00(元)，小计：37.50(元)
名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
----------------------
总计：58.50(元)
节省：7.50(元)
**********************`;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });





});

