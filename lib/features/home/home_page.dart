import 'package:flutter/material.dart';
import 'package:gap/gap.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Marathon'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {},
              child: const Text('Join initial pool'),
            ),
            const Gap(24),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Check who is in the pool'),
            ),
            const Gap(24),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Check who is in the pool'),
            ),
          ],
        ),
      ),
    );
  }
}


// As an artist I can register to join the pool
// As an artist I can be chosen randomly to start marathon
// As a chosen artist I can upload my art piece and a note for the next artist and refer a next artist at the same time
//