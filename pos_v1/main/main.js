'use strict';

function SameInputs(inputs) 
{
	  inputs = inputs.sort();
    var inputs1 = [];
    for (var i = 0; i < inputs.length; ++i ) 
    {
       var object = new Object();
       object.barcode = String(inputs[i]).substring(10,0)
       var index= i + 1;
       while (String(inputs[i]).substring(10,0)== String(inputs[i+1]).substring(10,0)&& index<inputs.length) //why can't use split() function?
         {
          inputs.splice(i,1);
          index++;
         }
       ;
       object.count = index- i;
       if(String(inputs[i]).length >10)
          {
            object.count += parseFloat(String(inputs[i]).substr(11))-1;
          }
        inputs1.push(object);
    } 
        return inputs1;    
}

function loadAllItems() {
  return [
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
      barcode: 'ITEM000002',
      name: '苹果',
      unit: '斤',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: '荔枝',
      unit: '斤',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: '电池',
      unit: '个',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: '方便面',
      unit: '袋',
      price: 4.50
    }
  ];
}

function MatchItems(inputs)
{
  let loadAllItem = [];
  loadAllItem = loadAllItems();
	for(var i=0; i<inputs.length; i++)
    for(let j =0; j <loadAllItem.length; j++)
	{
    if(inputs[i].barcode == loadAllItem[j].barcode)
    {
      inputs[i].name=loadAllItem[j].name;
      inputs[i].price=loadAllItem[j].price;
      inputs[i].unit=loadAllItem[j].unit;
    }
	}
	return inputs;
}

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}

function processInput(inputs) {
  let Promotion = loadPromotions();
  let receiptItems = [];
  for (let item of inputs)  {
    receiptItems.push({
      barcode:item.barcode,
      name: item.name,
      unit: item.unit,
      price: item.price,
      count: item.count,
      subtotal: item.price * item.count,
      subTotal: item.price * item.count
    });
   }

    for (var i=0; i<receiptItems.length; i++)
      for(let j=1; j<String(Promotion.barcodes).length; j++){
  	if(receiptItems[i].barcode == Promotion[0].barcodes[j])
  		receiptItems[i].subTotal=receiptItems[i].price * (receiptItems[i].count-1);
    }
  return receiptItems;
}
function buildSingleItem(receiptItem) {
  return `名称：${receiptItem.name}，数量：${receiptItem.count}${receiptItem.unit}，单价：${receiptItem.price.toFixed(2)}(元)，小计：${receiptItem.subTotal.toFixed(2)}(元)`
}
function printReceipt(inputs) {
  let itemStrings = "";
  let inputs1 = SameInputs(inputs);
  let inputs2 = MatchItems(inputs1);
  let receiptItems2 = processInput(inputs2);
  let total = 0;
  let Total = 0;
  for (let index = 0; index < receiptItems2.length; index ++) {
    if (index != receiptItems2.length-1) {
      itemStrings += buildSingleItem(receiptItems2[index]) +'\n';
    } else {
      itemStrings += buildSingleItem(receiptItems2[index]);
    }
    Total += receiptItems2[index].subtotal;
    total += receiptItems2[index].subTotal;
  }
  var print = "***<没钱赚商店>收据***\n" + itemStrings + "\n----------------------\n" + "总计：" + total.toFixed(2) + "(元)\n" + "节省：" + (Total-total).toFixed(2) + "(元)\n" + "**********************";
  console.log(print);
}
var inputs=[
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

printReceipt(inputs);
