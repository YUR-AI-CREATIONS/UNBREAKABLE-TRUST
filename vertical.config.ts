import { VerticalConfig } from '../vertical.config';

const unbreakableTrust: VerticalConfig = {
  id: 'unbreakable-trust',
  name: 'UNBREAKABLE-TRUST',
  tagline: 'Trust Architecture — Verified, Immutable, Sovereign',
  icon: '🛡️',
  primaryColor: '#708090',
  accentColor: '#FFD700',
  bgGradient: 'linear-gradient(135deg, #1C1C1C 0%, #708090 50%, #FFD700 100%)',
  systemInstruction: `You are UNBREAKABLE-TRUST, a sovereign trust framework engine. You design, validate, and enforce trust architectures — from cryptographic proof chains to organizational governance structures. You build systems where trust is earned through verification, not assumption. You combine zero-knowledge proofs, verifiable credentials, and transparent audit trails to create trust that cannot be faked, revoked, or undermined.`,
  complianceStandards: [
    'W3C Verifiable Credentials (VC Data Model)',
    'W3C Decentralized Identifiers (DIDs)',
    'eIDAS (EU Electronic Identification)',
    'NIST SP 800-63 (Digital Identity Guidelines)',
    'ISO 27001 (Information Security Trust)',
    'WebAuthn / FIDO2 Standards'
  ],
  agents: [
    {
      name: 'TRUST_ARCHITECT',
      role: 'Trust Model Design & Validation',
      systemPrompt: 'You design trust models for distributed systems — defining trust anchors, delegation chains, revocation mechanisms, and trust decay functions. You analyze trust topologies (hierarchical, web-of-trust, DPKI) and recommend the right model for each use case based on threat model and operational constraints.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'VERIFICATION_ENGINE',
      role: 'Cryptographic Proof Verification',
      systemPrompt: 'You verify cryptographic proofs — digital signatures, zero-knowledge proofs, Merkle tree inclusion proofs, and verifiable credential presentations. You validate certificate chains, check revocation status via CRL/OCSP, and detect compromised keys through certificate transparency logs.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'PROVENANCE_TRACKER',
      role: 'Origin & Chain-of-Custody Verification',
      systemPrompt: 'You track the provenance of data, documents, and decisions — building immutable audit trails that answer who created what, when, how, and why. You detect tampering in provenance chains, verify timestamps against trusted time sources, and maintain chain-of-custody records for legal admissibility.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'INTEGRITY_GUARDIAN',
      role: 'Continuous Integrity Monitoring',
      systemPrompt: 'You continuously monitor system integrity — file hashes, configuration checksums, database row-level signatures, and API response authenticity. You detect unauthorized modifications in real-time, trigger alerts with forensic context, and maintain integrity baselines that evolve with legitimate changes.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Certificate Transparency Logs',
      type: 'api',
      endpoint: 'https://ct.googleapis.com/logs',
      description: 'Public certificate transparency logs for TLS certificate monitoring and key compromise detection'
    },
    {
      name: 'DID Registry',
      type: 'database',
      description: 'Decentralized Identifier registry — DID documents, verification methods, and service endpoints'
    },
    {
      name: 'Audit Trail Store',
      type: 'database',
      description: 'Immutable append-only audit logs with cryptographic chaining for tamper evidence'
    },
    {
      name: 'Integrity Baseline Store',
      type: 'database',
      description: 'Known-good checksums, file hashes, and configuration fingerprints for drift detection'
    }
  ],
  outputFormats: [
    'Trust Architecture Documents',
    'Cryptographic Verification Reports',
    'Provenance Chain Visualizations',
    'Integrity Monitoring Dashboards',
    'Verifiable Credential Presentations',
    'Trust Model Comparison Matrices',
    'Audit Trail Forensic Reports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: false,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: false
  }
};

export default unbreakableTrust;
