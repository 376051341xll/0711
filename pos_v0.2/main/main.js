'use strict';

function SameInputs(inputs) 
{
    inputs.sort();
    var inputs1 = [];
    for (var i = 0; i < inputs.length; ++i ) 
    {
        var index= i + 1;
        while (inputs[i] === inputs[index] && index<inputs.length)
         {
         	inputs.splice(index,1);
            index++;
         }
        var object = new Object();
        object.barcode = inputs[i];
        object.count = index- i;
        inputs1.push(object);
    }
        return inputs1;
}


function MatchItems(inputs)
{

	for(var i=0; i<inputs.length; i++)
	{
		switch(inputs[i].barcode)
		{
			case "ITEM000000": 
				inputs[i].name='可口可乐';
				inputs[i].price=3.00;
				inputs[i].unit='瓶';
				break;
			case "ITEM000001":
				inputs[i].name='雪碧';
				inputs[i].price=3.00;
				inputs[i].unit='瓶;'
				break;
			case "ITEM000004":
				inputs[i].name='电池';
				inputs[i].price=2.00;
				inputs[i].unit='个';
				break;
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
  return `名称：${receiptItem.name}，数量：${receiptItem.count}${receiptItem.unit}，
  单价：${receiptItem.price}(元)，小计：${receiptItem.subTotal}(元)`

}

function printReceipt(inputs) {
  let itemStrings = "";
  let inputs1 = SameInputs(inputs);
  let inputs2 = MatchItems(inputs1);
  let receiptItems = processInput(inputs2);
  let total = 0;
  for (let index = 0; index < receiptItems.length; index ++) {
    if (index != receiptItems.length - 1) {
      itemStrings += buildSingleItem(receiptItems[index]) + '\n';
    } else {
      itemStrings += buildSingleItem(receiptItems[index]);
    }
    total += receiptItems[index].subTotal;
  }
  console.log( `***<没钱赚商店>收据***
${itemStrings}

----------------------      
总计：${total.toFixed(2)}(元)
**********************`);
}
var inputs = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000001',
      'ITEM000001',
      'ITEM000004'
    ];

printReceipt(inputs);