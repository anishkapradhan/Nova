import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import {
  CadetSessionProvider,
  useCadetSession,
} from '@/lib/session/CadetSessionContext';

describe('CadetSessionContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize session with a deterministic cadet handle and empty bookmarks', async () => {
    const wrapper = ({
      children,
    }: {
      children: React.ReactNode;
    }): React.JSX.Element => (
      <CadetSessionProvider>{children}</CadetSessionProvider>
    );

    const { result } = renderHook(() => useCadetSession(), { wrapper });

    await waitFor(() => {
      expect(result.current.isInitialized).toBe(true);
    });

    expect(result.current.cadetHandle).toMatch(/^Cadet_/);
    expect(result.current.bookmarks).toEqual([]);
  });

  it('should toggle bookmarks and persist them to localStorage', async () => {
    const wrapper = ({
      children,
    }: {
      children: React.ReactNode;
    }): React.JSX.Element => (
      <CadetSessionProvider>{children}</CadetSessionProvider>
    );

    const { result } = renderHook(() => useCadetSession(), { wrapper });

    await waitFor(() => {
      expect(result.current.isInitialized).toBe(true);
    });

    act(() => {
      result.current.toggleBookmark('res-aero-01');
    });

    expect(result.current.bookmarks).toContain('res-aero-01');
    expect(
      JSON.parse(localStorage.getItem('nova_cadet_bookmarks') || '[]')
    ).toContain('res-aero-01');

    // Toggle off
    act(() => {
      result.current.toggleBookmark('res-aero-01');
    });

    expect(result.current.bookmarks).not.toContain('res-aero-01');
  });

  it('should mark labs as completed and persist to localStorage', async () => {
    const wrapper = ({
      children,
    }: {
      children: React.ReactNode;
    }): React.JSX.Element => (
      <CadetSessionProvider>{children}</CadetSessionProvider>
    );

    const { result } = renderHook(() => useCadetSession(), { wrapper });

    await waitFor(() => {
      expect(result.current.isInitialized).toBe(true);
    });

    act(() => {
      result.current.markLabCompleted('rocket-delta-v-lab');
    });

    expect(result.current.completedLabs).toContain('rocket-delta-v-lab');
    expect(
      JSON.parse(localStorage.getItem('nova_cadet_labs') || '[]')
    ).toContain('rocket-delta-v-lab');
  });
});
