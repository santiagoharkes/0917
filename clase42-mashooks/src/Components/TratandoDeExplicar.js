import React, { useCallback, useMemo } from "react";

function TratandoDeExplicar() {
  const resultadoDeUseMemo = useMemo(() => {
    return "Holisssssssssssssssssssss";
  }, []);

  const resultadoDeUseCallback = useCallback(() => {
    return "Holisssssssssssssssssssss";
  }, []);

  console.log({ resultadoDeUseMemo });
  console.log({ resultadoDeUseCallback });

  return <div>Holis</div>;
}

export default TratandoDeExplicar;
