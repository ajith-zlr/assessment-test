import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'trans.dart';

class transcation extends StatefulWidget {
  const transcation({Key? key, required String id, required String title, required String amount, required DateTime date}) : super(key: key);

  @override
  State<transcation> createState() => _transcationState();
}

class _transcationState extends State<transcation> {
  final List<transcation> trans = [
    transcation(id:'t1', title:'newshoes',amount:'500',
    date:DateTime.now(),
    )
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flutter App')),
      body: Column(
        children: [
          Container(
            child: Text('CHART'),
          ),
          Card(
            child: Text('Fixed'),
            color: Colors.blue,
          )
        ],
      ),
    );
  }
}
