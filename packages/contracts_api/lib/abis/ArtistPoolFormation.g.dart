// Generated code, do not modify. Run `build_runner build` to re-generate!
// @dart=2.12
// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:web3dart/web3dart.dart' as _i1;

final _contractAbi = _i1.ContractAbi.fromJson(
  '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"artistAddress","type":"address"},{"indexed":false,"internalType":"string","name":"artistName","type":"string"}],"name":"ArtistAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"artistAddress","type":"address"}],"name":"ArtistRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"artistAddress","type":"address"}],"name":"FirstArtistSelected","type":"event"},{"inputs":[{"internalType":"address","name":"_artistAddress","type":"address"},{"internalType":"string","name":"_artistName","type":"string"}],"name":"addArtist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"artists","outputs":[{"internalType":"address","name":"artistAddress","type":"address"},{"internalType":"string","name":"artistName","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllArtists","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isArtistInPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_artistAddress","type":"address"}],"name":"removeArtist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"selectFirstArtist","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  'ArtistPoolFormation',
);

class ArtistPoolFormation extends _i1.GeneratedContract {
  ArtistPoolFormation({
    required _i1.EthereumAddress address,
    required _i1.Web3Client client,
    int? chainId,
  }) : super(
          _i1.DeployedContract(
            _contractAbi,
            address,
          ),
          client,
          chainId,
        );

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> addArtist(
    _i1.EthereumAddress _artistAddress,
    String _artistName, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[0];
    assert(checkSignature(function, '1a65745b'));
    final params = [
      _artistAddress,
      _artistName,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<Artists> artists(
    BigInt $param2, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[1];
    assert(checkSignature(function, 'cd7e10c1'));
    final params = [$param2];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Artists(response);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<List<_i1.EthereumAddress>> getAllArtists(
      {_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[2];
    assert(checkSignature(function, 'f803ace3'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as List<dynamic>).cast<_i1.EthereumAddress>();
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<bool> isArtistInPool(
    _i1.EthereumAddress $param3, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[3];
    assert(checkSignature(function, '2f1be945'));
    final params = [$param3];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as bool);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> removeArtist(
    _i1.EthereumAddress _artistAddress, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[4];
    assert(checkSignature(function, '978d5b76'));
    final params = [_artistAddress];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> selectFirstArtist({
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[5];
    assert(checkSignature(function, 'd5c0695e'));
    final params = [];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// Returns a live stream of all ArtistAdded events emitted by this contract.
  Stream<ArtistAdded> artistAddedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('ArtistAdded');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return ArtistAdded(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all ArtistRemoved events emitted by this contract.
  Stream<ArtistRemoved> artistRemovedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('ArtistRemoved');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return ArtistRemoved(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all FirstArtistSelected events emitted by this contract.
  Stream<FirstArtistSelected> firstArtistSelectedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('FirstArtistSelected');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return FirstArtistSelected(
        decoded,
        result,
      );
    });
  }
}

class Artists {
  Artists(List<dynamic> response)
      : artistAddress = (response[0] as _i1.EthereumAddress),
        artistName = (response[1] as String);

  final _i1.EthereumAddress artistAddress;

  final String artistName;
}

class ArtistAdded {
  ArtistAdded(
    List<dynamic> response,
    this.event,
  )   : artistAddress = (response[0] as _i1.EthereumAddress),
        artistName = (response[1] as String);

  final _i1.EthereumAddress artistAddress;

  final String artistName;

  final _i1.FilterEvent event;
}

class ArtistRemoved {
  ArtistRemoved(
    List<dynamic> response,
    this.event,
  ) : artistAddress = (response[0] as _i1.EthereumAddress);

  final _i1.EthereumAddress artistAddress;

  final _i1.FilterEvent event;
}

class FirstArtistSelected {
  FirstArtistSelected(
    List<dynamic> response,
    this.event,
  ) : artistAddress = (response[0] as _i1.EthereumAddress);

  final _i1.EthereumAddress artistAddress;

  final _i1.FilterEvent event;
}
