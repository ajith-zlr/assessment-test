import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:myfirst_flutter/homescreen.dart';

class Loginpage extends StatefulWidget {
  const Loginpage({Key? key}) : super(key: key);
  @override
  State<Loginpage> createState() => _LoginpageState();
}

class _LoginpageState extends State<Loginpage> {
  GlobalKey<FormState> _formkey = GlobalKey<FormState>();
  String username = "";
  String password = '';
  bool _isLoading = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('loginpage'),
      ),
      body: Container(
          margin: EdgeInsets.all(20),
          child: Form(
            key: _formkey,
            child: Column(
              children: [
                TextFormField(
                  decoration: const InputDecoration(
                      hintText: 'username',
                      labelText: 'enter userName',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.all(Radius.circular(20)))),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Enter Valid UserName';
                    } else {
                      return null;
                    }
                  },
                  onChanged: ((value) {
                    username = value;
                  }),
                ),
                const SizedBox(
                  height: 20,
                ),
                TextFormField(
                  decoration: InputDecoration(
                      labelText: 'password',
                      hintText: 'enter password',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(30))),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Enter valid password';
                    } else if (value.length < 6) {
                      return 'Enter atleast 6 charectors';
                    } else {
                      return null;
                    }
                  },
                  onChanged: (value) {
                    password = value;
                  },
                ),
                SizedBox(
                  height: 20,
                ),
                Container(
                  width: double.infinity,
                  child: RaisedButton(
                    color: Colors.blue,
                    onPressed: () {
                      Loginpage();
                    },
                    child: Text('Login'),
                    shape: StadiumBorder(),
                  ),
                ),
              ],
            ),
          )),
    );
  }

  void Loginpage() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => home()),
    );
    if (_formkey.currentState!.validate()) {
      FirebaseAuth.instance
          .createUserWithEmailAndPassword(email: username, password: password)
          .then((value) {
        setState(() {
          _isLoading = false;
        });
        Fluttertoast.showToast(msg: 'Login succsussfully');
        Navigator.pushAndRemoveUntil(
            context,
            MaterialPageRoute(builder: (_) => const home()),
            (Route<dynamic> route) => false);
      }).catchError((onError) {
        setState(() {
          _isLoading = false;
        });
        Fluttertoast.showToast(msg: 'Error' + onError.toString());
      });
    }
  }
}
