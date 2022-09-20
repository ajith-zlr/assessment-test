import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:myfirst_flutter/homescreen.dart';

import 'package:myfirst_flutter/signinscreen.dart';
import 'package:myfirst_flutter/transcation.dart';

import 'package:myfirst_flutter/translator.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  get date => null;

  get amount => null;

  get id => null;

  get title => null;

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      // home: const MyHomePage(title: 'Flutter Demo Home Page'),
      // home: LoginPage(),
      // home: pojos(),
      // home: popup1(),

      // home:route(),
      // home: register(),
      //  home: register1(),
      // home: weather(),
      // home: listexpanded(),
      // home: shopping(),
      // home: home(),
      // home: signin(),
      // home: home(),
      // home: Loginpage(),
      // home: trans(),
      // home: tran(),
      home: transcation(id: id, title: title, amount: amount, date: date),
    );
  }

  reg2() {}
}
