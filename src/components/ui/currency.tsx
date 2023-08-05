import React from "react";

import { formatter } from "@/lib/utils";

type Props = { value?: string | number };

const Currency = ({ value }: Props) => {
  return <span className="font-semibold">{formatter.format(Number(value))}</span>;
};

export default Currency;
