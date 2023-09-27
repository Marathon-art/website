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
	flutter pub global run intl_utils:generate

gen_abis:
	make copy_abis
	cd contracts_api && dart run build_runner build --delete-conflicting-outputs

copy_abis:
	# Create the directory if it doesn't exist
	mkdir -p contracts_api/lib/abis
	# Remove all old files from the directory
	rm -f contracts_api/lib/abis/*
	# Copy and rename the new ABI files
	find ../contracts/artifacts/contracts/ -type f -exec basename {} \; | \
	grep -E "^[a-zA-Z]+\.json$$" | \
	while read -r file; do \
		new_file=$$(echo $$file | sed 's/\.json$$/.abi.json/'); \
		find ../contracts/artifacts/contracts/ -type f -name "$$file" -exec cp {} contracts_api/lib/abis/$$new_file \; ; \
	done
