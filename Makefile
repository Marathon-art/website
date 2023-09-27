# Removes cached dependencies and rebuilds everything
nuke_flutter:
	flutter pub cache clean
	make setup_tools
	make clean_build

# Clean all packages
clean_all:
	flutter clean
	cd contracts_api && flutter clean

# Fetch dependencies for all packages
get_all:
	flutter pub get
	cd contracts_api && flutter pub get

# Install necessary tools
#setup_tools:
#	flutter pub global activate intl_utils
#	flutter pub global activate flutter_gen 5.3.1

# Generate code for all packages
gen_all:
	#make gen_assets
	#make gen_strings
	cd contracts_api && dart run build_runner build --delete-conflicting-outputs

# Run code generation
gen_code:
	#dart run build_runner build --delete-conflicting-outputs
	cd contracts_api && dart run build_runner build --delete-conflicting-outputs

# Run watcher that will trigger generation automatically
watch_runner:
	dart run build_runner watch --delete-conflicting-outputs

# Run all tests
run_tests:
	flutter test
	cd contracts_api && flutter test

# Clean, get dependencies and generate code for all packages
clean_build:
	make clean_all
	make get_all
	make gen_all

# Get dependencies and generate code for all packages
build_all:
	make get_all
	make gen_all

# Generate static file to access images
gen_assets:
	fluttergen -c ui/pubspec.yaml

# Generate static file to access localized strings
gen_strings:
	cd ui && flutter pub global run intl_utils:generate
	flutter pub global run intl_utils:generate
