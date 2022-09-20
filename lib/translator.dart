// ignore_for_file: unused_local_variable, deprecated_member_use

import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:translator/translator.dart';

class trans extends StatefulWidget {
  const trans({Key? key}) : super(key: key);

  @override
  State<trans> createState() => _transState();
}

GoogleTranslator translator = GoogleTranslator();

String text = "friend";
void translate() {
  translator.translate(text, from: 'en', to: 'es').then((print));
}

// void setstate(Null Function() param0) {}

class _transState extends State<trans> {
  GoogleTranslator translator = GoogleTranslator();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("translator"),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: [
            Text(text),
            RaisedButton(
              onPressed: (() {
                translate();
              }),
              child: Text('translate text'),
            ),
          ],
        ),
      ),
    );
  }
}
