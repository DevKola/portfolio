import type { ReactNode } from 'react'
import type { MockupVariant } from '../data/portfolio'
import { cn } from '../lib/cn'

function Window({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[6px] bg-white shadow-[0_24px_60px_-28px_rgba(20,30,40,0.45)] ring-1 ring-black/5',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-slate-200/80 px-3 py-2">
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-slate-100" />
      </div>
      {children}
    </div>
  )
}

const bars = [38, 62, 44, 78, 56, 90, 68]

function Dashboard({ accent }: { accent: string }) {
  return (
    <Window className="w-[86%]">
      <div className="flex">
        <div className="hidden w-[22%] flex-col gap-2 border-r border-slate-100 bg-slate-50/70 p-3 sm:flex">
          <div className="h-2 w-10 rounded-full" style={{ backgroundColor: accent }} />
          {[70, 55, 62, 48, 58].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full bg-slate-200"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <div className="flex-1 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-slate-300" />
            <div className="h-4 w-4 rounded-full bg-slate-200" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[3px] border border-slate-100 p-2">
                <div className="h-1 w-8 rounded-full bg-slate-200" />
                <div
                  className="mt-2 h-2 w-10 rounded-full"
                  style={{ backgroundColor: i === 0 ? accent : '#cbd5e1' }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5 sm:h-20">
            {bars.map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[2px]"
                style={{
                  height: `${height}%`,
                  backgroundColor: i === 5 ? accent : '#e2e8f0',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}

const columns = [
  ['#cbd5e1', '#e2e8f0'],
  ['#e2e8f0', '#cbd5e1', '#e2e8f0'],
  ['#e2e8f0', '#cbd5e1'],
]

function Board({ accent }: { accent: string }) {
  return (
    <Window className="w-[88%]">
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-slate-300" />
          <div
            className="h-4 w-12 rounded-[2px]"
            style={{ backgroundColor: accent }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {columns.map((cards, column) => (
            <div key={column} className="rounded-[3px] bg-slate-50 p-1.5">
              <div className="mb-1.5 flex items-center gap-1">
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <div className="h-1 w-8 rounded-full bg-slate-300" />
              </div>
              <div className="flex flex-col gap-1.5">
                {cards.map((tone, card) => (
                  <div key={card} className="rounded-[2px] bg-white p-1.5 ring-1 ring-slate-100">
                    <div className="h-1 w-full rounded-full bg-slate-200" />
                    <div className="mt-1 h-1 w-2/3 rounded-full" style={{ backgroundColor: tone }} />
                    <div className="mt-1.5 flex -space-x-1">
                      <span className="size-2 rounded-full bg-slate-200 ring-1 ring-white" />
                      <span className="size-2 rounded-full bg-slate-300 ring-1 ring-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

const invoices = [
  { id: 'RT3080', status: 'Paid' },
  { id: 'XM9141', status: 'Pending' },
  { id: 'RG0314', status: 'Paid' },
  { id: 'AA1449', status: 'Draft' },
]

function Invoice({ accent }: { accent: string }) {
  return (
    <Window className="w-[86%]">
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="h-2 w-16 rounded-full bg-slate-300" />
            <div className="mt-1.5 h-1 w-10 rounded-full bg-slate-200" />
          </div>
          <div className="h-4 w-14 rounded-[2px]" style={{ backgroundColor: accent }} />
        </div>
        <div className="flex flex-col gap-1.5">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between rounded-[2px] border border-slate-100 px-2 py-1.5"
            >
              <span className="font-mono text-[7px] font-semibold text-slate-400">
                {invoice.id}
              </span>
              <span className="h-1 w-10 rounded-full bg-slate-200" />
              <span
                className="rounded-full px-1.5 py-0.5 text-[6px] font-semibold uppercase tracking-wider"
                style={{
                  color: accent,
                  backgroundColor: `color-mix(in oklab, ${accent} 14%, white)`,
                }}
              >
                {invoice.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

const qrRows = [
  '1110101',
  '1000101',
  '1011100',
  '0101011',
  '1110010',
  '1001011',
  '1011101',
]

function Ticket({ accent }: { accent: string }) {
  return (
    <Window className="w-[64%]">
      <div className="flex items-center gap-3 p-3 sm:p-4">
        <div className="grid shrink-0 grid-cols-7 gap-[2px]">
          {qrRows.flatMap((row, y) =>
            row.split('').map((cell, x) => (
              <span
                key={`${x}-${y}`}
                className="size-[3px] rounded-[0.5px] sm:size-1"
                style={{ backgroundColor: cell === '1' ? '#334155' : 'transparent' }}
              />
            )),
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="h-1.5 w-14 rounded-full" style={{ backgroundColor: accent }} />
          <div className="mt-2 h-1 w-full rounded-full bg-slate-200" />
          <div className="mt-1.5 h-1 w-2/3 rounded-full bg-slate-200" />
          <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5">
            <span className="size-1 rounded-full bg-emerald-500" />
            <span className="text-[6px] font-semibold uppercase tracking-wider text-emerald-700">
              Verified
            </span>
          </div>
        </div>
      </div>
      <div className="mx-3 mb-3 border-t border-dashed border-slate-200 pt-2 sm:mx-4 sm:mb-4">
        <div className="h-1 w-16 rounded-full bg-slate-200" />
      </div>
    </Window>
  )
}

const variants: Record<MockupVariant, (props: { accent: string }) => ReactNode> = {
  dashboard: Dashboard,
  board: Board,
  invoice: Invoice,
  ticket: Ticket,
}

export function ProjectMockup({
  variant,
  accent,
  wash,
  className,
  aspectClassName = 'aspect-[4/3]',
}: {
  variant: MockupVariant
  accent: string
  wash: string
  className?: string
  aspectClassName?: string
}) {
  const Variant = variants[variant]
  return (
    <div
      className={cn('grid place-items-center overflow-hidden', aspectClassName, className)}
      style={{ backgroundColor: wash }}
      aria-hidden="true"
    >
      <Variant accent={accent} />
    </div>
  )
}
