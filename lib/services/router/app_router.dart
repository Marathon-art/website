import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:marathon/home/home_page.dart';

final appRouterProvider = Provider((ref) => AppRouter());

final rootKey = GlobalKey<NavigatorState>();

/// Roots must not be renamed for analytics consistency
class AppRouter {
  AppRouter()
      : delegate = GoRouter(
          initialLocation: '/',
          navigatorKey: rootKey,
          debugLogDiagnostics: true,
          routes: [
            GoRoute(
              path: '/',
              pageBuilder: (context, state) {
                return MaterialPage(
                  key: state.pageKey,
                  child: const HomePage(),
                );
              },
            ),
          ],
        );

  final GoRouter delegate;

  BuildContext get _context => rootKey.currentContext!;

  void pop<T>([T? result]) => delegate.pop(result);

  Future<T?> push<T extends Object?>(String location, {Object? extra}) => delegate.push(location, extra: extra);

  void go(String location, {Object? extra}) => delegate.go(location, extra: extra);

  Future<T?> pushReplacement<T extends Object?>(String location, {Object? extra}) =>
      delegate.pushReplacement<T>(location);
}
