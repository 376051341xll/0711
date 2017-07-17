写一个Person类，要有id，name，age属性，靠id来判断是否是同一个人。要有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old.

再写一个Student类继承Person类，除了id，name，age属性，还有要有class属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

但是Student的class属性不是一个数字，而是一个对象，写一个Class类，有number属性还有一个leader属性。但是leader属性不在构造器里。

Student构造的时候把Class的一个实例传给Student，参见测试用例。
Class有一个assignLeader方法，接收一个Student实例。意为将一名学生设置为该Class的班长。
如果Class的Leader是Tom，那么Tom调用introduce的方法就要返回：

My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.

如果没有就继续返回旧的字符串。

Class还有一个appendMember方法，接受一个Student实例。意味将一名学生加入该班级。
如果学生没有加入该班级，那么在调用assignLeader方法的时候，不会assign成功，会打印一句话：

It is not one of us.

相应的调用Student的introduce方法也只会返回旧的字符串。

再写一个Teacher类继承Person类，除了id，name，age属性，也有classes属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2, 3.

如果classes的长度为0，就会返回

My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.

Teacher还有一个isTeaching方法，传入一个学生，返回true/false。只要学生在classes中的任一个class中，就是在教他。
而学生是否在class中这件事情，应该是Class有一个方法isIn来判断。

当学生加入Teacher教的班级的时候，Teacher会打印一个句话,形如：

I am Tom. I know Jerry has joined Class 2.

当学生成为Teacher教的班级的班长的时候，Teacher会打印一个句话,形如：

I am Tom. I know Jerry become Leader of Class 2.

所有Person的子类的这段文字

My name is Tom. I am 21 years old.

都应该调用Person的introduce方法来获得