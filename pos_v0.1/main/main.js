
"use strict";
function SameInputs(inputs) 
{
  for(var i=0; i<inputs.length; ++i)
  {
    inputs[i].count=1;
    var index=i+1;
  while(index <inputs.length && inputs[index].barcode ==inputs[i].barcode)
  {
    inputs.splice(index,1);
    inputs[i].count++;
  }
}
  return inputs;
}

function processInput(inputs) {
  let receiptItems = [];
  for (let item of inputs) {
    receiptItems.push({
      barcode:item.barcode,
      name: item.name,
      unit: item.unit,
      price: item.price,
      count: item.count,
      subTotal: item.price * item.count
    });
  }
  return receiptItems;
}

function buildSingleItem(receiptItem) {
  return `名称：${receiptItem.name}，数量：${receiptItem.count}${receiptItem.unit}，单价：${receiptItem.price.toFixed(2)}(元)，小计：${receiptItem.subTotal.toFixed(2)}(元)`
}

function printReceipt(inputs) {
  let itemStrings = "";
  let inputs2 = SameInputs(inputs);
  let receiptItems = processInput(inputs2);
  let total = 0;
  for (let index = 0; index < receiptItems.length; index ++) {
    if (index != (receiptItems.length -1)) {
      itemStrings += buildSingleItem(receiptItems[index]) + '\n';
    } else {
      itemStrings += buildSingleItem(receiptItems[index]);
    }
    total += receiptItems[index].subTotal;
  }
  console.log( `***<没钱赚商店>收据***\n${itemStrings}\n----------------------\n总计：${total.toFixed(2)}(元)\n**********************`);
}

let inputs=[
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

      },
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
      },
      {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
      }
    ];

printReceipt(inputs);