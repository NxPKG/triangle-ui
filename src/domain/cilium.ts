import { ReservedLabel } from './labels';

export const reserved = {
  host: { id: 1, label: ReservedLabel.Host },
  world: { id: 2, label: ReservedLabel.World },
  unmanaged: { id: 3, label: ReservedLabel.Unmanaged },
  health: { id: 4, label: ReservedLabel.Health },
  init: { id: 5, label: ReservedLabel.Init },
  remoteNode: { id: 6, label: ReservedLabel.RemoteNode },
};

export enum CiliumEventTypes {
  Unspec = 0,
  Drop = 1,
  Debug = 2,
  Capture = 3,
  Trace = 4,
  PolicyVerdict = 5,
  L7 = 129,
  Agent = 130,
}

export const CiliumEventTypesCodes = {
  [CiliumEventTypes.Unspec]: CiliumEventTypes.Unspec,
  [CiliumEventTypes.Drop]: CiliumEventTypes.Drop,
  [CiliumEventTypes.Debug]: CiliumEventTypes.Debug,
  [CiliumEventTypes.Capture]: CiliumEventTypes.Capture,
  [CiliumEventTypes.Trace]: CiliumEventTypes.Trace,
  [CiliumEventTypes.PolicyVerdict]: CiliumEventTypes.PolicyVerdict,
  [CiliumEventTypes.L7]: CiliumEventTypes.L7,
  [CiliumEventTypes.Agent]: CiliumEventTypes.Agent,
};

export enum CiliumEventSubTypes {
  ToEndpoint = 'to-endpoint',
  ToProxy = 'to-proxy',
  ToHost = 'to-host',
  ToStack = 'to-stack',
  ToOverlay = 'to-overlay',
  FromEndpint = 'from-endpoint',
  FromProxy = 'from-proxy',
  FromHost = 'from-host',
  FromStack = 'from-stack',
  FromOverlay = 'from-overlay',
  FromNetwork = 'from-network',
}

export const CiliumEventSubTypesCodes = {
  0: CiliumEventSubTypes.ToEndpoint,
  1: CiliumEventSubTypes.ToProxy,
  2: CiliumEventSubTypes.ToHost,
  3: CiliumEventSubTypes.ToStack,
  4: CiliumEventSubTypes.ToOverlay,
  5: CiliumEventSubTypes.FromEndpint,
  6: CiliumEventSubTypes.FromProxy,
  7: CiliumEventSubTypes.FromHost,
  8: CiliumEventSubTypes.FromStack,
  9: CiliumEventSubTypes.FromOverlay,
  10: CiliumEventSubTypes.FromNetwork,
};

export enum CiliumDropReason {
  InvalidSourceMac = 'Invalid source mac',
  InvalidDestinationMac = 'Invalid destination mac',
  InvalidSourceIp = 'Invalid source ip',
  PolicyDenied = 'Policy denied',
  InvalidPacket = 'Invalid packet',
  CTTruncatedOrInvalidHeader = 'CT: Truncated or invalid header',
  CTMissingTCPACKFlag = 'CT; Missing TCP ACK flag',
  CTUnknownL4protocol = 'CT: Unknown L4 protocol',
  CTCantCreateEntryFromPacket = "CT: Can't create entry from packet",
  UnsupportedL3Protocol = 'Unsupported L3 protocol',
  MissedTailCall = 'Missed tail call',
  ErrorWritingToPacket = 'Error writing to packet',
  UnknownL4Protocol = 'Unknown L4 protocol',
  UnknownICMPv4Code = 'Unknown ICMPv4 code',
  UnknownICMPv4Type = 'Unknown ICMPv4 type',
  UnknownICMPv6Code = 'Unknown ICMPv6 code',
  UnknownICMPv6Type = 'Unknown ICMPv6 type',
  ErrorRetrievingTunnelKey = 'Error retrieving tunnel key',
  ErrorRetrievingTunnelOptions = 'Error retrieving tunnel options',
  InvalidGeneveOption = 'Invalid Geneve option',
  UnknownL3TargetAddress = 'Unknown L3 target address',
  StaleOrUnroutableIP = 'Stale or unroutable IP',
  NoMatchingLocalContainerFound = 'No matching local container found',
  ErrorWhileCorrectingL3Checksum = 'Error while correcting L3 checksum',
  ErrorWhileCorrectingL4Checksum = 'Error while correcting L4 checksum',
  CTMapinsertionFailed = 'CT: Map insertion failed',
  InvalidIPv6ExtensionHeader = 'Invalid IPv6 extension header',
  IPFragmentationNotSupported = 'IP fragmentation not supported',
  ServiceBackendNotFound = 'Service backend not found',
  NoTunnelEncapsulationEndpointDatapathBUG = 'No tunnel/encapsulation endpoint (datapath BUG!)',
  FailedToInsertIntoProxymap = 'Failed to insert into proxymap',
  UnknownConnectionTrackingState = 'Unknown connection tracking state',
  LocalHostIsUnreachable = 'Local host is unreachable',
  NoConfigurationAvailableToPerformPolicyDecision = 'No configuration available to perform policy decision',
  UnsupportedL2Protocol = 'Unsupported L2 protocol',
  NoMappingForNATMasquerade = 'No mapping for NAT masquerade',
  UnsupportedProtocolForNATMasquerade = 'Unsupported protocol for NAT masquerade',
  FIBLookupFailed = 'FIB lookup failed',
  EncapsulationTrafficIsProhibited = 'Encapsulation traffic is prohibited',
  InvalidIdentity = 'Invalid identity',
  UnknownSender = 'Unknown sender',
  NATNotNeeded = 'NAT not needed',
  IsAClusterIP = 'Is a ClusterIP',
  FirstLogicalDatagramFragmentNotFound = 'First logical datagram fragment not found',
  ForbiddenICMPv6Message = 'Forbidden ICMPv6 message',
  AuthenticationRequired = 'Authentication required',
}

export const CiliumDropReasonCodes = {
  130: CiliumDropReason.InvalidSourceMac,
  131: CiliumDropReason.InvalidDestinationMac,
  132: CiliumDropReason.InvalidSourceIp,
  133: CiliumDropReason.PolicyDenied,
  134: CiliumDropReason.InvalidPacket,
  135: CiliumDropReason.CTTruncatedOrInvalidHeader,
  136: CiliumDropReason.CTMissingTCPACKFlag,
  137: CiliumDropReason.CTUnknownL4protocol,
  138: CiliumDropReason.CTCantCreateEntryFromPacket,
  139: CiliumDropReason.UnsupportedL3Protocol,
  140: CiliumDropReason.MissedTailCall,
  141: CiliumDropReason.ErrorWritingToPacket,
  142: CiliumDropReason.UnknownL4Protocol,
  143: CiliumDropReason.UnknownICMPv4Code,
  144: CiliumDropReason.UnknownICMPv4Type,
  145: CiliumDropReason.UnknownICMPv6Code,
  146: CiliumDropReason.UnknownICMPv6Type,
  147: CiliumDropReason.ErrorRetrievingTunnelKey,
  148: CiliumDropReason.ErrorRetrievingTunnelOptions,
  149: CiliumDropReason.InvalidGeneveOption,
  150: CiliumDropReason.UnknownL3TargetAddress,
  151: CiliumDropReason.StaleOrUnroutableIP,
  152: CiliumDropReason.NoMatchingLocalContainerFound,
  153: CiliumDropReason.ErrorWhileCorrectingL3Checksum,
  154: CiliumDropReason.ErrorWhileCorrectingL4Checksum,
  155: CiliumDropReason.CTMapinsertionFailed,
  156: CiliumDropReason.InvalidIPv6ExtensionHeader,
  157: CiliumDropReason.IPFragmentationNotSupported,
  158: CiliumDropReason.ServiceBackendNotFound,
  160: CiliumDropReason.NoTunnelEncapsulationEndpointDatapathBUG,
  161: CiliumDropReason.FailedToInsertIntoProxymap,
  163: CiliumDropReason.UnknownConnectionTrackingState,
  164: CiliumDropReason.LocalHostIsUnreachable,
  165: CiliumDropReason.NoConfigurationAvailableToPerformPolicyDecision,
  166: CiliumDropReason.UnsupportedL2Protocol,
  167: CiliumDropReason.NoMappingForNATMasquerade,
  168: CiliumDropReason.UnsupportedProtocolForNATMasquerade,
  169: CiliumDropReason.FIBLookupFailed,
  170: CiliumDropReason.EncapsulationTrafficIsProhibited,
  171: CiliumDropReason.InvalidIdentity,
  172: CiliumDropReason.UnknownSender,
  173: CiliumDropReason.NATNotNeeded,
  174: CiliumDropReason.IsAClusterIP,
  175: CiliumDropReason.FirstLogicalDatagramFragmentNotFound,
  176: CiliumDropReason.ForbiddenICMPv6Message,
  189: CiliumDropReason.AuthenticationRequired,
};